import { $, browser, promise, ElementFinder, ExpectedConditions } from 'protractor';

export class IFramePage {

  private get formIframe(): ElementFinder {
    return $('#IF1');
  }

  private get formIframeTitle(): ElementFinder {
    return $('.wpb_wrapper > h1');
  }

  private get mainPageTitle(): ElementFinder {
    return $('#content > h1');
  }

  public async formIFrameContext(): Promise<void> {
    return browser.switchTo().frame(this.formIframe.getWebElement());
  }

  public async mainContext(): Promise<void> {
    return browser.switchTo().defaultContent();
  }

  public async getFormIFramePageTitle(): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.formIframeTitle), 4000);
    return this.formIframeTitle.getAttribute('innerHTML');
  }

  public async getMainPageTitle(): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.mainPageTitle), 4000);
    return this.mainPageTitle.getAttribute('innerHTML');
  }

  public async getIFrameHeight(): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.formIframe), 4000);
    return this.formIframe.getAttribute('height');
  }

  public async setIFrameHeight(newHeight: string): Promise<string> {
    return browser.executeScript(
        `document.getElementById(\'IF1\').setAttribute(\'height\', ${newHeight});`
    ).then((height :string) => {
      return height;
    });
  }

}
