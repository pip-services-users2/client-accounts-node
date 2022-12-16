let services = require('../../../src/protos/accounts_v1_grpc_pb');
let messages = require('../../../src/protos/accounts_v1_pb');

import { FilterParams } from 'pip-services3-commons-nodex';
import { PagingParams } from 'pip-services3-commons-nodex';
import { DataPage } from 'pip-services3-commons-nodex';
import { GrpcClient } from 'pip-services3-grpc-nodex';

import { IAccountsClientV1 } from './IAccountsClientV1';
import { AccountV1 } from './AccountV1';
import { AccountsGrpcConverterV1 } from './AccountsGrpcConverterV1';

export class AccountsGrpcClientV1 extends GrpcClient implements IAccountsClientV1 {
        
    public constructor() {
        super(services.AccountsClient);
    }

    public async getAccounts(correlationId: string, filter: FilterParams, paging: PagingParams): Promise<DataPage<AccountV1>> {

        let request = new messages.AccountPageRequest();

        AccountsGrpcConverterV1.setMap(request.getFilterMap(), filter);
        request.setPaging(AccountsGrpcConverterV1.fromPagingParams(paging));

        let timing = this.instrument(correlationId, 'accounts.get_accounts');

        try {
            let response = await this.call<any>('get_accounts', correlationId, request);

            if (response.error != null)
                throw AccountsGrpcConverterV1.toError(response.error);
            
            timing.endTiming();
            return response ? AccountsGrpcConverterV1.toAccountPage(response.getPage()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async getAccountById(correlationId: string, accountId: string): Promise<AccountV1> {

        let request = new messages.AccountIdRequest();
        request.setAccountId(accountId);

        let timing = this.instrument(correlationId, 'accounts.get_account_by_id');

        try {
            let response = await this.call<any>('get_account_by_id', correlationId, request);

            if (response.error != null)
                throw AccountsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }  
    }

    public async getAccountByLogin(correlationId: string, login: string): Promise<AccountV1> {

        let request = new messages.AccountLoginRequest();
        request.setLogin(login);

        let timing = this.instrument(correlationId, 'accounts.get_account_by_login');

        try {
            let response = await this.call<any>('get_account_by_login', correlationId, request);

            if (response.error != null)
                throw AccountsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }  
    }

    public async getAccountByIdOrLogin(correlationId: string, idOrLogin: string): Promise<AccountV1> {

        let request = new messages.AccountLoginRequest();
        request.setLogin(idOrLogin);

        let timing = this.instrument(correlationId, 'accounts.get_account_by_id_or_login');

        try {
            let response = await this.call<any>('get_account_by_id_or_login', correlationId, request);

            if (response.error != null)
                throw AccountsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async createAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {

        let accountObj = AccountsGrpcConverterV1.fromAccount(account);

        let request = new messages.AccountObjectRequest();
        request.setAccount(accountObj);

        let timing = this.instrument(correlationId, 'accounts.create_account');

        try {
            let response = await this.call<any>('create_account', correlationId, request);

            if (response.error != null)
                throw AccountsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async updateAccount(correlationId: string, account: AccountV1): Promise<AccountV1> {

        let accountObj = AccountsGrpcConverterV1.fromAccount(account);

        let request = new messages.AccountObjectRequest();
        request.setAccount(accountObj);
    
        let timing = this.instrument(correlationId, 'accounts.update_account');

        try {
            let response = await this.call<any>('update_account', correlationId, request);

            if (response.error != null)
                throw AccountsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }

    public async deleteAccountById(correlationId: string, accountId: string): Promise<AccountV1> {

        let request = new messages.AccountIdRequest();
        request.setAccountId(accountId);

        let timing = this.instrument(correlationId, 'accounts.delete_account_by_id');

        try {
            let response = await this.call<any>('delete_account_by_id', correlationId, request);

            if (response.error != null)
                throw AccountsGrpcConverterV1.toError(response.error);

            timing.endTiming();
            return response ? AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
        } catch (err) {
            timing.endFailure(err);
            throw err;
        }
    }
  
}
