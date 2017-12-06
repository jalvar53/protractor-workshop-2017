import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get tShirtImage(): ElementFinder {
    return $('.product_img_link > img');
  }

  public goToShirtDetailsMenu(): promise.Promise<void> {
    return this.tShirtImage.click();
  }
}
