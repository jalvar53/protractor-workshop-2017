import { $, ElementFinder, promise } from 'protractor';

export class ProductListPage {
  private get tShirtImage(): ElementFinder {
    return $('[alt*="Faded"]');
  }

  public goToShirtDetailsMenu(): promise.Promise<void> {
    return this.tShirtImage.click();
  }
}
