import { Descriptor } from 'pip-services3-commons-nodex';
import { References } from 'pip-services3-commons-nodex';
import { ConsoleLogger } from 'pip-services3-components-nodex';

import { AccountsMemoryPersistence } from 'service-accounts-node';
import { AccountsController } from 'service-accounts-node';
import { AccountsDirectClientV1 } from '../../src/version1/AccountsDirectClientV1';
import { AccountsClientFixtureV1 } from './AccountsClientFixtureV1';

suite('AccountsDirectClientV1', ()=> {
    let client: AccountsDirectClientV1;
    let fixture: AccountsClientFixtureV1;

    suiteSetup(async () => {
        let logger = new ConsoleLogger();
        let persistence = new AccountsMemoryPersistence();
        let controller = new AccountsController();

        let references: References = References.fromTuples(
            new Descriptor('pip-services', 'logger', 'console', 'default', '1.0'), logger,
            new Descriptor('service-accounts', 'persistence', 'memory', 'default', '1.0'), persistence,
            new Descriptor('service-accounts', 'controller', 'default', 'default', '1.0'), controller,
        );
        controller.setReferences(references);

        client = new AccountsDirectClientV1();
        client.setReferences(references);

        fixture = new AccountsClientFixtureV1(client);

        await client.open(null);
    });
    
    suiteTeardown(async () => {
        await client.close(null);
    });

    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
