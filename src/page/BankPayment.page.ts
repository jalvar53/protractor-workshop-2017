import { $, ElementFinder, promise } from 'protractor';

export class BankPaymentStepPage {
  private get orderMenu(): ElementFinder {
    return $('#cart_navigation > button > span');
  }

  public goToOrderMenu(): promise.Promise<void> {
    return this.orderMenu.click();
  }
}
