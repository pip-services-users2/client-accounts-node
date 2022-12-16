import { ConfigParams } from 'pip-services3-commons-nodex';

import { Descriptor } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { DirectClient } from 'pip-services3-rpc-nodex';

import { IAccountsClientV1 } from './IAccountsClientV1';
//import { IAccountsController } from 'service-accounts-node';
import { AccountV1 } from './AccountV1';

export class AccountsDirectClientV1 extends DirectClient<any> implements IAccountsClientV1 {
            
    public constructor(config?: any) {
        super();
        this._dependencyResolver.put('controller', new Descriptor("service-accounts", "controller", "*", "*", "*"));

        if (config)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getAccounts(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AccountV1>> {
        let timing = this.instrument(correlationId, 'accounts.get_accounts');

        try {
            let res = await this._controller.getAccounts(correlationId, filter, paging);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getAccountById(correlationId: string, id: string): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.get_account_by_id');

        try {
            let res = await this._controller.getAccountById(correlationId, id);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getAccountByLogin(correlationId: string, login: string): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.get_account_by_login');

        try {
            let res = await this._controller.getAccountByLogin(correlationId, login);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getAccountByIdOrLogin(correlationId: string, idOrLogin: string): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.get_account_by_id_or_login');

        try {
            let res = await this._controller.getAccountByIdOrLogin(correlationId, idOrLogin);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async createAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.create_account');
        
        try {
            let res = await this._controller.createAccount(correlationId, account);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async updateAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.update_account');

        try {
            let res = await this._controller.updateAccount(correlationId, account);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteAccountById(correlationId: string, id: string): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.delete_account_by_id');

        try {
            let res = await this._controller.deleteAccountById(correlationId, id);
            timing.endTiming();
            return res;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
}