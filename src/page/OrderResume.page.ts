import { $, ElementFinder, promise } from 'protractor';

export class OrderResumePage {
  public get getOrderStatus(): ElementFinder {
    return $('#center_column > div > p > strong');
  }
}
