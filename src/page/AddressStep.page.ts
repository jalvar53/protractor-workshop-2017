import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get shippingMenu(): ElementFinder {
    return $('.button-exclusive + button > span');
  }

  public goToShippingMenu(): promise.Promise<void> {
    return this.shippingMenu.click();
  }
}
