import { AccountsMockClientV1 } from '../../src/version1/AccountsMockClientV1';
import { AccountsClientFixtureV1 } from './AccountsClientFixtureV1';

suite('AccountsMockClientV1', ()=> {
    let client: AccountsMockClientV1;
    let fixture: AccountsClientFixtureV1;

    setup(() => {
        client = new AccountsMockClientV1();

        fixture = new AccountsClientFixtureV1(client);
    });
    
    test('CRUD Operations', async () => {
        await fixture.testCrudOperations();
    });

});
