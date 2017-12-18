import { $, ElementFinder, element, by } from 'protractor';
import { resolve } from 'path';
import { DownloadService } from '../service/Download.service';

export class PersonalInformationPage {

  downloadService: DownloadService = new DownloadService();

  public get title(): ElementFinder {
    return $('.wpb_wrapper > h1');
  }

  private get finalButton(): ElementFinder {
    return $('#submit');
  }
  
  public get downloadButton(): ElementFinder {
    return $('a[href$=".xlsx"]');
  }

  public get uploadImageInput(): ElementFinder {
    return $('#photo');
  }

  private async uploadImage(path: string): Promise<void> {
    const absoluteImagePath: string = resolve(path);
    return this.uploadImageInput.sendKeys(absoluteImagePath);
  }

  private async fillFirstNameInput(firstName: string): Promise<void> {
    return $('input[name="firstname"]').sendKeys(firstName);
  }

  private async fillLastNameInput(lastName: string): Promise<void> {
    return $('input[name="lastname"]').sendKeys(lastName);
  }

  private async fillSexInput(sex: string): Promise<void> {
    return $(`input[name="sex"][value=${sex}]`).click();
  }

  private async fillExperienceInput(years: number): Promise<void> {
    return $(`input[name="exp"][value="${years}"]`).click();
  }

  private async fillProfessionInput(professions: string[]): Promise<void> {
    await professions.forEach(async (profession:string) => {
      await $(`input[name="profession"][value="${profession}"]`).click(); 
    });
  }

  private async fillToolsInput(tools: string[]): Promise<void> {
    await tools.forEach(async (tool: string) => {
      await $(`input[name="tool"][value="${tool}"]`).click(); 
    });
  }

  private async fillContinentInput(continent: string): Promise<void> {
    return $('#continents').element(by.cssContainingText('option', continent)).click();
  }

  private async fillCommandsInput(commands: string[]): Promise<void> {
    await commands.forEach(async (command: string) => {
      await $('#selenium_commands').element(by.cssContainingText('option', command)).click();
    });
  }
  
  private async download(fileName: string): Promise<void> {
    const link: string = await this.downloadButton.getAttribute('href');
    return this.downloadService.downloadFile(link, fileName);
  }

  public async submit(personalInformation: {[prop: string]: any}): Promise<void> {
    await this.fillForm(personalInformation);
    return this.finalButton.click();
  }

  public async getImageName(): Promise<string> {
    return this.uploadImageInput.getAttribute('value');
  }

  public async fillForm(personalInformation: {[prop: string]: any}): Promise<void> {
    await this.fillFirstNameInput(personalInformation.firstName);
    await this.fillLastNameInput(personalInformation.lastName);
    await this.fillSexInput(personalInformation.sex);
    await this.fillExperienceInput(personalInformation.experience);
    await this.fillProfessionInput(personalInformation.professions);
    await this.uploadImage(personalInformation.file);
    if (personalInformation.hasOwnProperty('downloadFile')) {
      await this.download(personalInformation.downloadFile);
    }
    await this.fillToolsInput(personalInformation.tools);
    await this.fillContinentInput(personalInformation.continent);
    return this.fillCommandsInput(personalInformation.commands);
  }
}
