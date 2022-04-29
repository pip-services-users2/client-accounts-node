import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';
import { IAccountsClientV1 } from './IAccountsClientV1';
import { AccountV1 } from './AccountV1';
export declare class AccountsGrpcClientV1 extends GrpcClient implements IAccountsClientV1 {
    constructor();
    getAccounts(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AccountV1>>;
    getAccountById(correlationId: string, accountId: string): Promise<AccountV1>;
    getAccountByLogin(correlationId: string, login: string): Promise<AccountV1>;
    getAccountByIdOrLogin(correlationId: string, idOrLogin: string): Promise<AccountV1>;
    createAccount(correlationId: string, account: AccountV1): Promise<AccountV1>;
    updateAccount(correlationId: string, account: AccountV1): Promise<AccountV1>;
    deleteAccountById(correlationId: string, accountId: string): Promise<AccountV1>;
}
