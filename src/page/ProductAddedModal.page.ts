import { $, ElementFinder, promise, browser, ExpectedConditions } from 'protractor';

export class ProductAddedModalPage {
  private get productAddedModal(): ElementFinder {
    return $('.exclusive-medium + a');
  }

  public async goToSummary(): Promise<void> {
    await browser.wait(ExpectedConditions.elementToBeClickable(this.productAddedModal), 4000);
    return this.productAddedModal.click();
  }
}
