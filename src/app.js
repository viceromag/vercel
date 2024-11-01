const express = require('express');
const cors = require('cors');
const RebillyAPI = require('rebilly-js-sdk').default;

const app = express();
const port = 3000;
app.use(cors());

const REBILLY_API_SECRET_KEY = "sk_sandbox_bkJWBpH3Pfpl3QBJyjiaHn6tsaKJnJ9AxrO7Q40";
const REBILLY_WEBSITE_ID = "rebilly.com";
const REBILLY_ORGANIZATION_ID = 'phronesis-jackpot';
const api = RebillyAPI({
    sandbox: true,
    apiKey: REBILLY_API_SECRET_KEY,
});

app.post('/deposit-usd', (req, res) => {
    const customerId = 'test-customer';
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
					//strategyId: "dep_str_01JAZR9M6QEB792433FNEQKCTV",
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
    const customerId = 'test-customer';
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
					//strategyId: "dep_str_01JAZRCMXF0K3GH8NYGYYK21TJ",
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
