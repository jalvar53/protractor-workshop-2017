import { $, browser, promise, ElementFinder, ExpectedConditions } from 'protractor';

export class IFramePage {

  private get frame1(): ElementFinder {
    return $('#IF1');
  }

  private get frame1Title(): ElementFinder {
    return $('.wpb_wrapper > h1');
  }

  private get mainPageTitle(): ElementFinder {
    return $('#content > h1');
  }

  public get iFrame1Context(): promise.Promise<void> {
    return browser.switchTo().frame(this.frame1.getWebElement());
  }

  public get mainContext(): promise.Promise<void> {
    return browser.switchTo().defaultContent();
  }

  public async getIFrame1PageTitle(): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.frame1Title), 4000);
    return this.frame1Title.getAttribute('innerHTML');
  }

  public async getMainPageTitle(): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.mainPageTitle), 4000);
    return this.mainPageTitle.getAttribute('innerHTML');
  }

  public async getIFrameHeight(): Promise<string> {
    await browser.wait(ExpectedConditions.presenceOf(this.frame1), 4000);
    return this.frame1.getAttribute('height');
  }

  public async setIFrameHeight(newHeight: string): Promise<string> {
    return browser.executeScript(
        `document.getElementById(\'IF1\').setAttribute(\'height\', ${newHeight});`
    ).then((height :string) => {
      return height;
    });
  }

}
