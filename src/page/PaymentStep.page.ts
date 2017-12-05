import { $, ElementFinder, promise } from 'protractor';

export class PaymentStepPage {
  private get bankPaymentMenu(): ElementFinder {
    return $('.bankwire');
  }
    
  public goToBankPaymentMenu(): promise.Promise<void> {
    return this.bankPaymentMenu.click();
  }
}
