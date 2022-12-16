import { Descriptor } from 'pip-services3-commons-nodex';
import { ConfigParams } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { AccountsMemoryPersistence } from 'service-accounts-node';
import { AccountsController } from 'service-accounts-node';
import { AccountsCommandableHttpServiceV1 } from 'service-accounts-node';
import { AccountsCommandableHttpClientV1 } from '../../src/version1/AccountsCommandableHttpClientV1';
import { AccountsClientFixtureV1 } from './AccountsClientFixtureV1';

var httpConfig = ConfigParams.fromTuples(
    "connection.protocol", "http",
    "connection.host", "localhost",
    "connection.port", 3000
);

suite('AccountsHttpClientV1', ()=> {
    let service: AccountsCommandableHttpServiceV1;
    let client: AccountsCommandableHttpClientV1;
    let fixture: AccountsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new AccountsMemoryPersistence();
        let controller = new AccountsController();

        service = new AccountsCommandableHttpServiceV1();
        service.configure(httpConfig);

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-accounts', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-accounts', 'controller', 'default', 'default', '1.0'), controller,
            new Descriptor('service-accounts', 'service', 'http', 'default', '1.0'), service
        );
        controller.setReferences(references);
        service.setReferences(references);

        client = new AccountsCommandableHttpClientV1();
        client.setReferences(references);
        client.configure(httpConfig);

        fixture = new AccountsClientFixtureV1(client);

        await service.open(null);
        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
        await service.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
