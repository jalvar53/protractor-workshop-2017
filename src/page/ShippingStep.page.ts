import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get paymentMenu(): ElementFinder {
    return $('#form > p > button > span');
  }

  public goToPaymentMenu(): promise.Promise<void> {
    return this.paymentMenu.click();
  }

  public agreeTermsOfService(): promise.Promise<void> {
    return $('#cgv').click();
  }
}
