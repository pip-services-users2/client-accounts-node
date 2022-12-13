"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AccountsClientFactory = void 0;
const pip_services3_commons_nodex_1 = require("pip-services3-commons-nodex");
const pip_services3_components_nodex_1 = require("pip-services3-components-nodex");
const AccountsNullClientV1_1 = require("../version1/AccountsNullClientV1");
const AccountsMemoryClientV1_1 = require("../version1/AccountsMemoryClientV1");
const AccountsDirectClientV1_1 = require("../version1/AccountsDirectClientV1");
const AccountsCommandableHttpClientV1_1 = require("../version1/AccountsCommandableHttpClientV1");
const AccountsCommandableGrpcClientV1_1 = require("../version1/AccountsCommandableGrpcClientV1");
class AccountsClientFactory extends pip_services3_components_nodex_1.Factory {
    constructor() {
        super();
        this.registerAsType(AccountsClientFactory.NullClientV1Descriptor, AccountsNullClientV1_1.AccountsNullClientV1);
        this.registerAsType(AccountsClientFactory.MemoryClientV1Descriptor, AccountsMemoryClientV1_1.AccountsMemoryClientV1);
        this.registerAsType(AccountsClientFactory.DirectClientV1Descriptor, AccountsDirectClientV1_1.AccountsDirectClientV1);
        this.registerAsType(AccountsClientFactory.CommandableHttpClientV1Descriptor, AccountsCommandableHttpClientV1_1.AccountsCommandableHttpClientV1);
        this.registerAsType(AccountsClientFactory.CommandableGrpcClientV1Descriptor, AccountsCommandableGrpcClientV1_1.AccountsCommandableGrpcClientV1);
    }
}
exports.AccountsClientFactory = AccountsClientFactory;
AccountsClientFactory.Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-accounts', 'factory', 'default', 'default', '1.0');
AccountsClientFactory.NullClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-accounts', 'client', 'null', 'default', '1.0');
AccountsClientFactory.MemoryClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-accounts', 'client', 'memory', 'default', '1.0');
AccountsClientFactory.DirectClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-accounts', 'client', 'direct', 'default', '1.0');
AccountsClientFactory.CommandableHttpClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-accounts', 'client', 'http', 'default', '1.0');
AccountsClientFactory.CommandableGrpcClientV1Descriptor = new pip_services3_commons_nodex_1.Descriptor('service-accounts', 'client', 'commandable-grpc', 'default', '1.0');
//# sourceMappingURL=AccountsClientFactory.js.map