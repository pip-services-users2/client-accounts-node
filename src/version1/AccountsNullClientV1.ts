import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams} from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';

import { IAccountsClientV1 } from './IAccountsClientV1';
import { AccountV1 } from './AccountV1';

export class AccountsNullClientV1 implements IAccountsClientV1 {
    public async getAccounts(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AccountV1>> {
        return null;
    }

    public async getAccountById(correlationId: string, id: string): Promise<AccountV1> {
        return null;
    }

    public async getAccountByLogin(correlationId: string, login: string): Promise<AccountV1> {
        return null;
    }

    public async getAccountByIdOrLogin(correlationId: string, idOrLogin: string): Promise<AccountV1> {
        return null;
    }

    public async createAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {
        return null;
    }

    public async updateAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {
        return null;
    }

    public async deleteAccountById(correlationId: string, id: string): Promise<AccountV1> {
        return null;
    }
}