import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get cartMenu(): ElementFinder {
    return $('#add_to_cart > button > span');
  }

  public goToCartMenu(): promise.Promise<void> {
    return this.cartMenu.click();
  }
}
