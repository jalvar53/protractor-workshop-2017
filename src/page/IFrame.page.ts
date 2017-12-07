import { $, browser, promise, ElementFinder, ExpectedConditions } from 'protractor';

export class IFramePage {

  public async getIFrameHeight(): Promise<string> {
    const iFrame: ElementFinder = $('#IF1');
    await browser.wait(ExpectedConditions.presenceOf(iFrame), 4000);
    return iFrame.getAttribute('height');
  }

  public async setIFrameHeight(newHeight: string): Promise<string> {
    return browser.executeScript(
        `document.getElementById(\'IF1\').setAttribute(\'height\', ${newHeight});`
    ).then((height :string) => {
      return height;
    });
  }
}
