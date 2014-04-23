require.config({
    baseUrl: "../src",
    map: {
        '*': {
            '../../../src/' : ''
        }
    },
    paths: {
        'require': 'libs/require',
        'knockout': 'libs/knockout'
    },
    shim: {
    }
});

