import { $, ElementFinder, promise } from 'protractor';

export class SignInStepPage {
  private get addressesMenu(): ElementFinder {
    return $('#SubmitLogin > span');
  }

  public goToAddressesMenu(): promise.Promise<void> {
    $('#email').sendKeys('aperdomobo@gmail.com');
    $('#passwd').sendKeys('WorkshopProtractor');
    return this.addressesMenu.click();
  }

}
