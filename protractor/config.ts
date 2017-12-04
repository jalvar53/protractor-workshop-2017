import { browser, Config } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  framework: 'jasmine',
  getPageTimeout: 1000,
  SELENIUM_PROMISE_MANAGER: false,
  specs: ['../test/*.spec.js'],
  noGlobals: true,
  onPrepare: () => {
    browser.ignoreSynchronization = true;
    reporter();
  }
};
