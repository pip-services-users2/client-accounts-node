# User Accounts Microservice Client SDK for Node.js / ES2017

This is a Node.js client SDK for [service-accounts](https://github.com/pip-services-users2/service-accounts-node) microservice.
It provides an easy to use abstraction over communication protocols:

* HTTP/REST client
* GRPC client
* Direct client for monolytic deployments
* Null client to be used in testing

<a name="links"></a> Quick Links:

* [Development Guide](doc/Development.md)
* [API Version 1](doc/NodeClientApiV1.md)

## Install

Add dependency to the client SDK into **package.json** file of your project
```javascript
{
    ...
    "dependencies": {
        ....
        "client-accounts-node": "^1.0.*",
        ...
    }
}
```

Then install the dependency using **npm** tool
```bash
# Install new dependencies
npm install

# Update already installed dependencies
npm update
```

## Use

Inside your code get the reference to the client SDK
```javascript
var sdk = new require('client-accounts-node');
```

Define client configuration parameters that match configuration of the microservice external API
```javascript
// Client configuration
var config = {
    connection: {
        protocol: 'http',
        host: 'localhost', 
        port: 8080
    }
};
```

Instantiate the client and open connection to the microservice
```javascript
// Create the client instance
var client = sdk.AccountsHttpClientV1(config);

// Connect to the microservice
try {
    await client.open(null);
    // Work with the microservice
    ...
}
catch (err) {
    console.error('Connection to the microservice failed');
    console.error(err);
}
```

Now the client is ready to perform operations
```javascript
// Register a new account
let account = await client.createAccount(
    null,
    { 
        name: 'Test User',
        login: 'somebody@somewhere.com'
    },
);
```

```javascript
// Find created account
let account = await client.getAccountByLogin(
    null,
    'somebody@somewhere.com',
);
```    

## Acknowledgements

This client SDK was created and currently maintained by *Sergey Seroukhov*.

