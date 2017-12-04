exports.config = {
    framework: 'jasmine',
    seleniumAddress: 'http://localhost:4444/wd/hub',
    specs: ['test/google.spec.js'],
    onPrepare: () => {
        browser.ignoreSynchronization = true;
    }
}
