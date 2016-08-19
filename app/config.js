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
config.horizon_url       = 'http://dev.stellar.attic.pw:8010';
config.bank_public_key   = 'GAWIB7ETYGSWULO4VB7D6S42YLPGIC7TY7Y2SSJKVOTMQXV5TILYWBUA';
config.emission_key_hash = 'eyJpdiI6IjFLVTNjeHFpM0NDa2xpNEc3UG9DWVE9PSIsInYiOjEsIml0ZXIiOjEwMDAsImtzIjoxMjgsInRzIjo2NCwibW9kZSI6ImNjbSIsImFkYXRhIjoiIiwiY2lwaGVyIjoiYWVzIiwic2FsdCI6IllZR3JhbjQyUzZnPSIsImN0IjoiSDV4MnRDZHdwZ2NMTmxPZHNzVEtBRUlNNDB5dVFtWHZQdGR2Y2t0QWc5dDNUSUV1YUtmcnZEclpaUlRpRG1pNFJ4ZEtmZnZkNFlBbm82ZU5wUjQxK3c9PSJ9';

module.exports = config;
