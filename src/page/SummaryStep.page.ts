import { $, ElementFinder, promise } from 'protractor';

export class SummaryStepPage {
    private get signInMenu(): ElementFinder {
        return $('.cart_navigation span');
    }

    public goToSiginMenu(): promise.Promise<void>{
        return this.signInMenu.click();
    }
}