import { ConfigParams } from 'pip-services3-commons-nodex';
import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';

import { AccountV1 } from './AccountV1';
import { IAccountsClientV1 } from './IAccountsClientV1';

export class AccountsCommandableHttpClientV1 extends CommandableHttpClient implements IAccountsClientV1 {

    constructor(config?: any) {
        super('v1/accounts');

        if (config != null)
            this.configure(ConfigParams.fromValue(config));
    }

    public async getAccounts(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AccountV1>> {
        return await this.callCommand(
            'get_accounts',
            correlationId,
            {
                filter: filter,
                paging: paging
            }
        );
    }

    public async getAccountById(correlationId: string, id: string): Promise<AccountV1> {
        return await this.callCommand(
            'get_account_by_id',
            correlationId,
            {
                account_id: id
            },
        );
    }

    public async getAccountByLogin(correlationId: string, login: string): Promise<AccountV1> {
        return await this.callCommand(
            'get_account_by_login',
            correlationId,
            {
                login: login
            },
        );
    }

    public async getAccountByIdOrLogin(correlationId: string, idOrLogin: string): Promise<AccountV1> {
        return await this.callCommand(
            'get_account_by_id_or_login',
            correlationId,
            {
                id_or_login: idOrLogin
            },
        );
    }

    public async createAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {
        return await this.callCommand(
            'create_account',
            correlationId,
            {
                account: account
            }
        );
    }

    public async updateAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {
        return await this.callCommand(
            'update_account',
            correlationId,
            {
                account: account
            }
        );
    }

    public async deleteAccountById(correlationId: string, id: string): Promise<AccountV1> {
        return await this.callCommand(
            'delete_account_by_id',
            correlationId,
            {
                account_id: id
            }
        );
    }

}
