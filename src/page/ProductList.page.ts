import { $, ElementFinder, ElementArrayFinder, promise, $$ } from 'protractor';

export class ProductListPage {
  private get tShirtImage(): ElementFinder {
    return $('.product_img_link > img');
  }

  private get productContainerList(): ElementArrayFinder {
    return $$('.product-container');
  }

  public goToShirtDetailsMenu(productName: string): promise.Promise<void> {
    return this.selectProduct(productName).$('img').click();
  }

  private selectProduct(productName: string): ElementFinder {
    return this.productContainerList
    .filter(elem => elem.$('.product-name').getText()
    .then(text => text === productName)).first();
  }

}