import { Descriptor } from 'pip-services3-commons-nodex';
import { Factory } from 'pip-services3-components-nodex';

import { AccountsNullClientV1 } from '../version1/AccountsNullClientV1';
import { AccountsMockClientV1 } from '../version1/AccountsMockClientV1';
import { AccountsDirectClientV1 } from '../version1/AccountsDirectClientV1';
import { AccountsCommandableHttpClientV1 } from '../version1/AccountsCommandableHttpClientV1';
import { AccountsCommandableGrpcClientV1 } from '../version1/AccountsCommandableGrpcClientV1';

export class AccountsClientFactory extends Factory {
	public static Descriptor: Descriptor = new Descriptor('service-accounts', 'factory', 'default', 'default', '1.0');
	public static NullClientV1Descriptor = new Descriptor('service-accounts', 'client', 'null', 'default', '1.0');
	public static MockClientV1Descriptor = new Descriptor('service-accounts', 'client', 'mock', 'default', '1.0');
	public static DirectClientV1Descriptor = new Descriptor('service-accounts', 'client', 'direct', 'default', '1.0');
	public static CommandableHttpClientV1Descriptor = new Descriptor('service-accounts', 'client', 'http', 'default', '1.0');
	public static CommandableGrpcClientV1Descriptor = new Descriptor('service-accounts', 'client', 'commandable-grpc', 'default', '1.0');
	
	constructor() {
		super();

		this.registerAsType(AccountsClientFactory.NullClientV1Descriptor, AccountsNullClientV1);
		this.registerAsType(AccountsClientFactory.MockClientV1Descriptor, AccountsMockClientV1);
		this.registerAsType(AccountsClientFactory.DirectClientV1Descriptor, AccountsDirectClientV1);
		this.registerAsType(AccountsClientFactory.CommandableHttpClientV1Descriptor, AccountsCommandableHttpClientV1);
		this.registerAsType(AccountsClientFactory.CommandableGrpcClientV1Descriptor, AccountsCommandableGrpcClientV1);
	}
	
}
