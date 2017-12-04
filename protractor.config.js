exports.config = {
    framework: 'jasmine',
    getPageTimeout: 1000,
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/**/*.spec.js'],
    onPrepare: () => {
        browser.ignoreSynchronization = true;
    }
}
