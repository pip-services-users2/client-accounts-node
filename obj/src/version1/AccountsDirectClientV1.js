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
exports.AccountsDirectClientV1 = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_commons_nodex_2 = require("pip-services3-commons-nodex");
const pip_services3_rpc_nodex_1 = require("pip-services3-rpc-nodex");
class AccountsDirectClientV1 extends pip_services3_rpc_nodex_1.DirectClient {
    constructor(config) {
        super();
        this._dependencyResolver.put('controller', new pip_services3_commons_nodex_2.Descriptor("service-accounts", "controller", "*", "*", "*"));
        if (config)
            this.configure(pip_services3_commons_nodex_1.ConfigParams.fromValue(config));
    }
    getAccounts(correlationId, filter, paging) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.get_accounts');
            try {
                let res = yield this._controller.getAccounts(correlationId, filter, paging);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getAccountById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.get_account_by_id');
            try {
                let res = yield this._controller.getAccountById(correlationId, id);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getAccountByLogin(correlationId, login) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.get_account_by_login');
            try {
                let res = yield this._controller.getAccountByLogin(correlationId, login);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    getAccountByIdOrLogin(correlationId, idOrLogin) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.get_account_by_id_or_login');
            try {
                let res = yield this._controller.getAccountByIdOrLogin(correlationId, idOrLogin);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    createAccount(correlationId, account) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.create_account');
            try {
                let res = yield this._controller.createAccount(correlationId, account);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    updateAccount(correlationId, account) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.update_account');
            try {
                let res = yield this._controller.updateAccount(correlationId, account);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
    deleteAccountById(correlationId, id) {
        return __awaiter(this, void 0, void 0, function* () {
            let timing = this.instrument(correlationId, 'accounts.delete_account_by_id');
            try {
                let res = yield this._controller.deleteAccountById(correlationId, id);
                timing.endTiming();
                return res;
            }
            catch (err) {
                timing.endFailure(err);
                throw err;
            }
        });
    }
}
exports.AccountsDirectClientV1 = AccountsDirectClientV1;
//# sourceMappingURL=AccountsDirectClientV1.js.map