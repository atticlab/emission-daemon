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
config.bank_public_key   = 'GAWIB7ETYGSWULO4VB7D6S42YLPGIC7TY7Y2SSJKVOTMQXV5TILYWBUA';
config.emission_key_hash = 'eyJpdiI6ImlBMkxGVWgrV3JSUE10dFFuU2NsK3c9PSIsInYiOjEsIml0ZXIiOjEwMDAsImtzIjoxMjgsInRzIjo2NCwibW9kZSI6ImNjbSIsImFkYXRhIjoiIiwiY2lwaGVyIjoiYWVzIiwic2FsdCI6Iis0Z0wzSnkrV3lVPSIsImN0IjoiUWczd0krOUpwaGgxLzVJY3dPM21tVjlmVDJpVDY3V0tOSjdJZWY5MGdISG5obmJVYUh2YlVBaDNrOXMwbXhaWnpqZWZEaTdZQ1dvZVlRcGtJTy9DVUE9PSJ9';

module.exports = config;