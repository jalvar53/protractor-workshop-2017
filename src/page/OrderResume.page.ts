import { $, ElementFinder } from 'protractor';

export class OrderResumePage {
  public get getOrderStatus(): ElementFinder {
    return $('.cheque-indent > strong');
  }
}
