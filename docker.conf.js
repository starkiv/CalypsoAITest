exports.config = {
    runner: 'local',
    hostname: 'localhost',
    port: 4444,
    path: '/',

    specs: [
        './test/specs/**/*.js',
    ],

    exclude: [],

    maxInstances: 1,

    capabilities: [{

        browserName: 'chrome',
        maxInstances: 1,
        'goog:chromeOptions': {
            args: ['--ignore-certificate-errors']
        },
    },
        {

        maxInstances: 1,

        browserName: 'firefox',
    }],


    logLevel: 'info',

    bail: 0,

    baseUrl: 'http://automationpractice.com/index.php',

    waitforTimeout: 60000,

    connectionRetryTimeout: 60000,

    connectionRetryCount: 3,

    services: ['docker'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
}