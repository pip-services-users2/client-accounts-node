import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { CommandableHttpClient } from 'pip-services3-rpc-nodex';
import { AccountV1 } from './AccountV1';
import { IAccountsClientV1 } from './IAccountsClientV1';
export declare class AccountsCommandableHttpClientV1 extends CommandableHttpClient implements IAccountsClientV1 {
    constructor(config?: any);
    getAccounts(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AccountV1>>;
    getAccountById(correlationId: string, id: string): Promise<AccountV1>;
    getAccountByLogin(correlationId: string, login: string): Promise<AccountV1>;
    getAccountByIdOrLogin(correlationId: string, idOrLogin: string): Promise<AccountV1>;
    createAccount(correlationId: string, account: AccountV1): Promise<AccountV1>;
    updateAccount(correlationId: string, account: AccountV1): Promise<AccountV1>;
    deleteAccountById(correlationId: string, id: string): Promise<AccountV1>;
}
