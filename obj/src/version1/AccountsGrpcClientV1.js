"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsGrpcClientV1 = void 0;
let services = require('../../../src/protos/accounts_v1_grpc_pb');
let messages = require('../../../src/protos/accounts_v1_pb');
const pip_services3_grpc_nodex_1 = require("pip-services3-grpc-nodex");
const AccountsGrpcConverterV1_1 = require("./AccountsGrpcConverterV1");
class AccountsGrpcClientV1 extends pip_services3_grpc_nodex_1.GrpcClient {
    constructor() {
        super(services.AccountsClient);
    }
    getAccounts(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.AccountPageRequest();
            AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.setMap(request.getFilterMap(), filter);
            request.setPaging(AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.fromPagingParams(paging));
            let timing = this.instrument(correlationId, 'accounts.get_accounts');
            try {
                let response = yield this.call('get_accounts', correlationId, request);
                if (response.error != null)
                    throw AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toAccountPage(response.getPage()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getAccountById(correlationId, accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.AccountIdRequest();
            request.setAccountId(accountId);
            let timing = this.instrument(correlationId, 'accounts.get_account_by_id');
            try {
                let response = yield this.call('get_account_by_id', correlationId, request);
                if (response.error != null)
                    throw AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getAccountByLogin(correlationId, login) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.AccountLoginRequest();
            request.setLogin(login);
            let timing = this.instrument(correlationId, 'accounts.get_account_by_login');
            try {
                let response = yield this.call('get_account_by_login', correlationId, request);
                if (response.error != null)
                    throw AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getAccountByIdOrLogin(correlationId, idOrLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.AccountLoginRequest();
            request.setLogin(idOrLogin);
            let timing = this.instrument(correlationId, 'accounts.get_account_by_id_or_login');
            try {
                let response = yield this.call('get_account_by_id_or_login', correlationId, request);
                if (response.error != null)
                    throw AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createAccount(correlationId, account) {
        return __awaiter(this, void 0, void 0, function* () {
            let accountObj = AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.fromAccount(account);
            let request = new messages.AccountObjectRequest();
            request.setAccount(accountObj);
            let timing = this.instrument(correlationId, 'accounts.create_account');
            try {
                let response = yield this.call('create_account', correlationId, request);
                if (response.error != null)
                    throw AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateAccount(correlationId, account) {
        return __awaiter(this, void 0, void 0, function* () {
            let accountObj = AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.fromAccount(account);
            let request = new messages.AccountObjectRequest();
            request.setAccount(accountObj);
            let timing = this.instrument(correlationId, 'accounts.update_account');
            try {
                let response = yield this.call('update_account', correlationId, request);
                if (response.error != null)
                    throw AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteAccountById(correlationId, accountId) {
        return __awaiter(this, void 0, void 0, function* () {
            let request = new messages.AccountIdRequest();
            request.setAccountId(accountId);
            let timing = this.instrument(correlationId, 'accounts.delete_account_by_id');
            try {
                let response = yield this.call('delete_account_by_id', correlationId, request);
                if (response.error != null)
                    throw AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toError(response.error);
                timing.endTiming();
                return response ? AccountsGrpcConverterV1_1.AccountsGrpcConverterV1.toAccount(response.getAccount()) : null;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.AccountsGrpcClientV1 = AccountsGrpcClientV1;
//# sourceMappingURL=AccountsGrpcClientV1.js.map