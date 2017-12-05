import { $, ElementFinder, promise, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private get productAddedModal(): ElementFinder {
    return $('[style*="display: block;"] .button-container > a');
  }

  public goToSummary(): promise.Promise<void> {
    browser.wait(ExpectedConditions.elementToBeClickable(this.productAddedModal));
    return this.productAddedModal.click();
  }
}
