module.exports = {
    compilers: {
        solc: {
            version: "^0.8.4"
        }
    },
    networks: {
        development: {
            host: '127.0.0.1',
            port: 9545,
            network_id: '*',
            websockets: true
        }
    }
};