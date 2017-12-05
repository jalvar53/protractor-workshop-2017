import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get addressesMenu(): ElementFinder {
    return $('#SubmitLogin > span');
  }

  public goToAddressesMenu(): promise.Promise<void> {
    return this.addressesMenu.click();
  }

}
