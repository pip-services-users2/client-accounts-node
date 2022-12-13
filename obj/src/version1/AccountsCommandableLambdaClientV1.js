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
exports.AccountsCommandableLambdaClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_aws_nodex_1 = require("pip-services3-aws-nodex");
class AccountsCommandableLambdaClientV1 extends pip_services3_aws_nodex_1.CommandableLambdaClient {
    constructor(config) {
        super('accounts');
        if (config != null)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getAccounts(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.get_accounts');
            try {
                return yield this.callCommand('get_accounts', correlationId, {
                    filter: filter,
                    paging: paging
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getAccountById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.get_account_by_id');
            try {
                return yield this.callCommand('get_account_by_id', correlationId, {
                    account_id: id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getAccountByLogin(correlationId, login) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.get_account_by_login');
            try {
                return yield this.callCommand('get_account_by_login', correlationId, {
                    login: login
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    getAccountByIdOrLogin(correlationId, idOrLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.get_account_by_id_or_login');
            try {
                return yield this.callCommand('get_account_by_id_or_login', correlationId, {
                    id_or_login: idOrLogin
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    createAccount(correlationId, account) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.create_account');
            try {
                return yield this.callCommand('create_account', correlationId, {
                    account: account
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    updateAccount(correlationId, account) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.create_account');
            try {
                return yield this.callCommand('update_account', correlationId, {
                    account: account
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
    deleteAccountById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.create_account');
            try {
                return yield this.callCommand('delete_account_by_id', correlationId, {
                    account_id: id
                });
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
            finally {
                timing.endTiming();
            }
        });
    }
}
exports.AccountsCommandableLambdaClientV1 = AccountsCommandableLambdaClientV1;
//# sourceMappingURL=AccountsCommandableLambdaClientV1.js.map