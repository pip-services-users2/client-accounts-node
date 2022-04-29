const assert = require('chai').assert;

import { AccountV1 } from '../../src/version1/AccountV1';
import { IAccountsClientV1 } from '../../src/version1/IAccountsClientV1';

let ACCOUNT1 = new AccountV1('1', 'Test Account 1', 'user1@conceptual.vision');
let ACCOUNT2 = new AccountV1('2', 'Test Account 2', 'user2@conceptual.vision');

export class AccountsClientFixtureV1 {
    private _client: IAccountsClientV1;
    
    constructor(client: IAccountsClientV1) {
        this._client = client;
    }
        
    public async testCrudOperations() {
        let account1, account2;

        // Create one account
        account1 = await this._client.createAccount(null, ACCOUNT1);

        assert.isObject(account1);
        assert.equal(account1.name, ACCOUNT1.name);
        assert.equal(account1.login, ACCOUNT1.login);

        // Create another account
        account2 = await this._client.createAccount(null, ACCOUNT2);

        assert.isObject(account2);
        assert.equal(account2.name, ACCOUNT2.name);
        assert.equal(account2.login, ACCOUNT2.login);

        // Get all accounts
        let page = await this._client.getAccounts(null, null, null);

        assert.isObject(page);
        assert.lengthOf(page.data, 2);

        // Get random account
        let account = await this._client.getAccountByIdOrLogin(null, ACCOUNT1.login);

        assert.isObject(account);

        // Update the account
        account1.name = 'Updated Account 1';
        account = await this._client.updateAccount(null, account1);

        assert.isObject(account);
        assert.equal(account.name, 'Updated Account 1');
        assert.equal(account.login, account1.login);

        // Delete account
        await this._client.deleteAccountById(null, account1.id);

        // Try to get deleted account
        account = await this._client.getAccountById(null, account1.id);

        assert.isObject(account);
        assert.isTrue(account.deleted);
    }
}
