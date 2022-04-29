import { AccountsMemoryClientV1 } from '../../src/version1/AccountsMemoryClientV1';
import { AccountsClientFixtureV1 } from './AccountsClientFixtureV1';

suite('AccountsMemoryClientV1', ()=> {
    let client: AccountsMemoryClientV1;
    let fixture: AccountsClientFixtureV1;

    setup(() => {
        client = new AccountsMemoryClientV1();

        fixture = new AccountsClientFixtureV1(client);
    });
    
    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
