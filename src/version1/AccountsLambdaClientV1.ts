import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableLambdaClient } from 'pip-services3-aws-nodex';

import { AccountV1 } from './AccountV1';
import { IAccountsClientV1 } from './IAccountsClientV1';

export class AccountsLambdaClientV1 extends CommandableLambdaClient implements IAccountsClientV1 {

    constructor(config?: any) {
        super('accounts');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getAccounts(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AccountV1>> {
        let timing = this.instrument(correlationId, 'accounts.get_accounts');

        try {
            return await this.callCommand(
                'get_accounts',
                correlationId,
                {
                    filter: filter,
                    paging: paging
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getAccountById(correlationId: string, id: string): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.get_account_by_id');

        try {
            return await this.callCommand(
                'get_account_by_id',
                correlationId,
                {
                    account_id: id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getAccountByLogin(correlationId: string, login: string): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.get_account_by_login');

        try {
            return await this.callCommand(
                'get_account_by_login',
                correlationId,
                {
                    login: login
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async getAccountByIdOrLogin(correlationId: string, idOrLogin: string): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.get_account_by_id_or_login');

        try {
            return await this.callCommand(
                'get_account_by_id_or_login',
                correlationId,
                {
                    id_or_login: idOrLogin
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async createAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.create_account');

        try {
            return await this.callCommand(
                'create_account',
                correlationId,
                {
                    account: account
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async updateAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.create_account');

        try {
            return await this.callCommand(
                'update_account',
                correlationId,
                {
                    account: account
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }

    public async deleteAccountById(correlationId: string, id: string): Promise<AccountV1> {
        let timing = this.instrument(correlationId, 'accounts.create_account');

        try {
            return await this.callCommand(
                'delete_account_by_id',
                correlationId,
                {
                    account_id: id
                }
            );
        } catch (err) {
            timing.endFailure(err);
            throw err;
        } finally {
            timing.endTiming();
        }
    }
}
