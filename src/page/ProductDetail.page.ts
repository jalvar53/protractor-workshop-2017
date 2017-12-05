import { $, ElementFinder, promise } from 'protractor';

export class ProductDetailPage {
  private get cartMenu(): ElementFinder {
    return $('[name="Submit"] > span');
  }

  public goToCartMenu(): promise.Promise<void> {
    return this.cartMenu.click();
  }
}
