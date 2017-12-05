import { $, ElementFinder, promise } from 'protractor';

export class AddressStepPage {
  private get shippingMenu(): ElementFinder {
    return $('#center_column > form > p > button > span');
  }

  public goToShippingMenu() {
    this.shippingMenu.click();
  }
}
