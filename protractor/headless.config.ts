import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';
import { awesomeReporter } from './helpers/awesome-report';

export const config: Config = {
  framework: 'jasmine',
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  },
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/*.spec.js'],
  noGlobals: true,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--window-size=800,600']
    }
  },
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
    awesomeReporter();
    reporter();
  }
};
