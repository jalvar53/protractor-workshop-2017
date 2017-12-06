import { $, ElementFinder, promise } from 'protractor';

export class ShippingStepPage {
  private get paymentMenu(): ElementFinder {
    return $('.standard-checkout > span');
  }

  private get termsOfService(): ElementFinder {
    return $('#cgv');
  }

  public goToPaymentMenu(): promise.Promise<void> {
    return this.paymentMenu.click();
  }

  public agreeTermsOfService(): promise.Promise<void> {
    return this.termsOfService.click();
  }
}
