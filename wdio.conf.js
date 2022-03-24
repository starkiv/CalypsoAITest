exports.config = {
    hostname: 'localhost',
    port: 4444,
    path: '/',

    specs: [
        './test/specs/**/*spec.js'
    ],

    exclude: [],

    maxInstances: 1,

    capabilities: [{

        maxInstances: 1,

        browserName: 'chrome',
        acceptInsecureCerts: true

    }],

    logLevel: 'info',

    bail: 0,

    baseUrl: 'http://automationpractice.com/index.php',

    waitforTimeout: 30000,

    connectionRetryTimeout: 60000,

    connectionRetryCount: 3,

    services: ['chromedriver'],

    framework: 'mocha',

    reporters: ['spec'],

    mochaOpts: {
        ui: 'bdd',
        timeout: 120000
    },
}
