import { $, ElementFinder, promise } from 'protractor';

export class MenuContentPage {
  private get tShirtMenu(): ElementFinder {
    return $('.sf-menu > li:nth-child(3) > a');
  }

  public goToShirtMenu(): promise.Promise<void> {
    return this.tShirtMenu.click();
  }
}
