var config = {};

config.app = {
    port: 5050
};

config.auth = {
    user: "username",
    password: "password"
};

// Base currency
config.base_currency = 'UAH';


// Timeout between requests to oracle (in ms)
config.horizon_url       = 'http://stellar.attic.pw:8000';
config.bank_public_key   = 'GCGN6JATSN2ZEWGNWNCMIWKOY3YFYD2UNRGE4ZRFQCMJ5XRBSYHQZI2X';
config.emission_key_hash = 'eyJpdiI6Iktmbm1TaGMvbzRQNE5JcDJCZ2ZSS3c9PSIsInYiOjEsIml0ZXIiOjEwMDAsImtzIjoxMjgsInRzIjo2NCwibW9kZSI6ImNjbSIsImFkYXRhIjoiIiwiY2lwaGVyIjoiYWVzIiwic2FsdCI6Ikk4S1JhNERPV1lNPSIsImN0IjoiZ3pOUW5WamNSUWR0REtyNytPOFo3cVVEQ0NZNWU4WDEwSzZqMS9DOU5EOVdxY3dQRXlFcmJYbjZJaFlEZGJ2UmM4R0F2eEJkTjFRbi9WcFo5WThJTXc9PSJ9';

module.exports = config;
