const express = require('express');
const cors = require('cors');
const RebillyAPI = require('rebilly-js-sdk').default;

const app = express();
const port = 3000;
app.use(cors());

const REBILLY_API_SECRET_KEY = "*";
const REBILLY_WEBSITE_ID = "google.com";
const REBILLY_ORGANIZATION_ID = 'phronesis---summitvilla';
const api = RebillyAPI({
    sandbox: true,
    apiKey: REBILLY_API_SECRET_KEY,
});


app.get('/invoices', (req, res) => {
    api.invoices.getAll({filter:'customerId:cus_01J63Y0C1XZ5Q3M4G9W246KX2P'}).then(function (invoices){
        res.send(invoices);
    })
});

app.post('/deposit-request', (req, res) => {
    const customerId = 'cus_01J72X65QDGA4DJ7FXSSXMRYRR';
    const response = {};
    const data = {
        mode: "passwordless",
        customerId,
    };
    api.customerAuthentication.login({
        data,
    }).then(function (login){
        const { fields: exchangeToken } =
            api.customerAuthentication.exchangeToken({
                token: login.fields.token,
                data: {
                    acl: [
                        {
                            scope: {
                                organizationId: [REBILLY_ORGANIZATION_ID],
                            },
                            permissions: [
                                "PostToken",
                                "PostDigitalWalletValidation",
                                "StorefrontGetAccount",
                                "StorefrontPatchAccount",
                                "StorefrontPostPayment",
                                "StorefrontGetTransactionCollection",
                                "StorefrontGetTransaction",
                                "StorefrontGetPaymentInstrumentCollection",
                                "StorefrontPostPaymentInstrument",
                                "StorefrontGetPaymentInstrument",
                                "StorefrontPatchPaymentInstrument",
                                "StorefrontPostPaymentInstrumentDeactivation",
                                "StorefrontGetWebsite",
                                "StorefrontGetInvoiceCollection",
                                "StorefrontGetInvoice",
                                "StorefrontGetProductCollection",
                                "StorefrontGetProduct",
                                "StorefrontPostReadyToPay",
                                "StorefrontGetPaymentInstrumentSetup",
                                "StorefrontPostPaymentInstrumentSetup",
                                "StorefrontGetDepositRequest",
                                "StorefrontGetDepositStrategy",
                                "StorefrontPostDeposit",
                            ],
                        },
                    ],
                    customClaims: {
                        websiteId: REBILLY_WEBSITE_ID,
                    },
                },
            }).then(function (exchangeToken){
                const requestDepositData = {
                    websiteId: REBILLY_WEBSITE_ID,
                    customerId,
                    currency: "USD",
                    amounts: [500*0.2, 500*0.3,500*0.5],
                    "amountLimits": {
                        "minimum": 500*0.2,
                        "maximum": 500
                    },
                };
                api.depositRequests.create({
                    data: requestDepositData,
                }).then(function (deposit){
                    response.token = exchangeToken.fields.token;
                    response.depositRequestId = deposit.fields.id;
                    res.send(response);
                });
            });
    });


});

app.post('/deposit-request-project-11', (req, res) => {
    const customerId = 'cus_01J72X65QDGA4DJ7FXSSXMRYRR';
    const response = {};
    const data = {
        mode: "passwordless",
        customerId,
    };
    api.customerAuthentication.login({
        data,
    }).then(function (login){
        const { fields: exchangeToken } =
            api.customerAuthentication.exchangeToken({
                token: login.fields.token,
                data: {
                    acl: [
                        {
                            scope: {
                                organizationId: [REBILLY_ORGANIZATION_ID],
                            },
                            permissions: [
                                "PostToken",
                                "PostDigitalWalletValidation",
                                "StorefrontGetAccount",
                                "StorefrontPatchAccount",
                                "StorefrontPostPayment",
                                "StorefrontGetTransactionCollection",
                                "StorefrontGetTransaction",
                                "StorefrontGetPaymentInstrumentCollection",
                                "StorefrontPostPaymentInstrument",
                                "StorefrontGetPaymentInstrument",
                                "StorefrontPatchPaymentInstrument",
                                "StorefrontPostPaymentInstrumentDeactivation",
                                "StorefrontGetWebsite",
                                "StorefrontGetInvoiceCollection",
                                "StorefrontGetInvoice",
                                "StorefrontGetProductCollection",
                                "StorefrontGetProduct",
                                "StorefrontPostReadyToPay",
                                "StorefrontGetPaymentInstrumentSetup",
                                "StorefrontPostPaymentInstrumentSetup",
                                "StorefrontGetDepositRequest",
                                "StorefrontGetDepositStrategy",
                                "StorefrontPostDeposit",
                            ],
                        },
                    ],
                    customClaims: {
                        websiteId: REBILLY_WEBSITE_ID,
                    },
                },
            }).then(function (exchangeToken){
                const requestDepositData = {
                    websiteId: REBILLY_WEBSITE_ID,
                    customerId,
                    currency: "USD",
                    amounts: [10, 20,30, 40],
                    "amountLimits": {
                        "minimum": 10,
                        "maximum": 5000
                    },
                };
                api.depositRequests.create({
                    data: requestDepositData,
                }).then(function (deposit){
                    response.token = exchangeToken.fields.token;
                    response.depositRequestId = deposit.fields.id;
                    res.send(response);
                });
            });
    });


});

app.post('/deposit-usd', (req, res) => {
    const customerId = 'cus_01J72X65QDGA4DJ7FXSSXMRYRR';
    const response = {};
    const data = {
        mode: "passwordless",
        customerId,
    };
    api.customerAuthentication.login({
        data,
    }).then(function (login){
        const { fields: exchangeToken } =
            api.customerAuthentication.exchangeToken({
                token: login.fields.token,
                data: {
                    acl: [
                        {
                            scope: {
                                organizationId: [REBILLY_ORGANIZATION_ID],
                            },
                            permissions: [
                                "PostToken",
                                "PostDigitalWalletValidation",
                                "StorefrontGetAccount",
                                "StorefrontPatchAccount",
                                "StorefrontPostPayment",
                                "StorefrontGetTransactionCollection",
                                "StorefrontGetTransaction",
                                "StorefrontGetPaymentInstrumentCollection",
                                "StorefrontPostPaymentInstrument",
                                "StorefrontGetPaymentInstrument",
                                "StorefrontPatchPaymentInstrument",
                                "StorefrontPostPaymentInstrumentDeactivation",
                                "StorefrontGetWebsite",
                                "StorefrontGetInvoiceCollection",
                                "StorefrontGetInvoice",
                                "StorefrontGetProductCollection",
                                "StorefrontGetProduct",
                                "StorefrontPostReadyToPay",
                                "StorefrontGetPaymentInstrumentSetup",
                                "StorefrontPostPaymentInstrumentSetup",
                                "StorefrontGetDepositRequest",
                                "StorefrontGetDepositStrategy",
                                "StorefrontPostDeposit",
                            ],
                        },
                    ],
                    customClaims: {
                        websiteId: REBILLY_WEBSITE_ID,
                    },
                },
            }).then(function (exchangeToken){
                const requestDepositData = {
                    websiteId: REBILLY_WEBSITE_ID,
                    customerId,
                    currency: "USD",
					strategyId: "dep_str_01JAZR9M6QEB792433FNEQKCTV",
                };
                api.depositRequests.create({
                    data: requestDepositData,
                }).then(function (deposit){
                    response.token = exchangeToken.fields.token;
                    response.depositRequestId = deposit.fields.id;
                    res.send(response);
                });
            });
    });


});

app.post('/deposit-cad', (req, res) => {
    const customerId = 'cus_01J72X65QDGA4DJ7FXSSXMRYRR';
    const response = {};
    const data = {
        mode: "passwordless",
        customerId,
    };
    api.customerAuthentication.login({
        data,
    }).then(function (login){
        const { fields: exchangeToken } =
            api.customerAuthentication.exchangeToken({
                token: login.fields.token,
                data: {
                    acl: [
                        {
                            scope: {
                                organizationId: [REBILLY_ORGANIZATION_ID],
                            },
                            permissions: [
                                "PostToken",
                                "PostDigitalWalletValidation",
                                "StorefrontGetAccount",
                                "StorefrontPatchAccount",
                                "StorefrontPostPayment",
                                "StorefrontGetTransactionCollection",
                                "StorefrontGetTransaction",
                                "StorefrontGetPaymentInstrumentCollection",
                                "StorefrontPostPaymentInstrument",
                                "StorefrontGetPaymentInstrument",
                                "StorefrontPatchPaymentInstrument",
                                "StorefrontPostPaymentInstrumentDeactivation",
                                "StorefrontGetWebsite",
                                "StorefrontGetInvoiceCollection",
                                "StorefrontGetInvoice",
                                "StorefrontGetProductCollection",
                                "StorefrontGetProduct",
                                "StorefrontPostReadyToPay",
                                "StorefrontGetPaymentInstrumentSetup",
                                "StorefrontPostPaymentInstrumentSetup",
                                "StorefrontGetDepositRequest",
                                "StorefrontGetDepositStrategy",
                                "StorefrontPostDeposit",
                            ],
                        },
                    ],
                    customClaims: {
                        websiteId: REBILLY_WEBSITE_ID,
                    },
                },
            }).then(function (exchangeToken){
                const requestDepositData = {
                    websiteId: REBILLY_WEBSITE_ID,
                    customerId,
                    currency: "CAD",
					strategyId: "dep_str_01JAZRCMXF0K3GH8NYGYYK21TJ",
                };
                api.depositRequests.create({
                    data: requestDepositData,
                }).then(function (deposit){
                    response.token = exchangeToken.fields.token;
                    response.depositRequestId = deposit.fields.id;
                    res.send(response);
                });
            });
    });


});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
