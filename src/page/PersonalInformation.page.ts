import { $, ElementFinder, element, by, promise } from 'protractor';
import { resolve } from 'path';

export class PersonalInformationPage {

  public get title(): ElementFinder {
    return $('.wpb_wrapper > h1');
  }

  private get finalButton(): ElementFinder {
    return $('#submit');
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

  private async fillProfessionInput(profession: string): Promise<void> {
    return $(`input[name="profession"][value="${profession}"]`).click(); 
  }

  private async fillToolsInput(tool: string): Promise<void> {
    return $(`input[name="tool"][value="${tool}"]`).click(); 
  }

  private async fillContinentInput(continent: string): Promise<void> {
    return $('#continents').element(by.cssContainingText('option', continent)).click();
  }

  private async fillCommandsInput(command: string): Promise<void> {
    return $('#selenium_commands').element(by.cssContainingText('option', command)).click();
  }

  public async submit(personalInformation: {[prop: string]: any}): Promise<void> {
    await this.fillForm(personalInformation);
    return this.finalButton.click();
  }

  public getImageName() {
    return this.uploadImageInput.getAttribute('value');
  }

  public async fillForm(personalInformation: {[prop: string]: any}): Promise<void> {
    await this.fillFirstNameInput(personalInformation.firstName);
    await this.fillLastNameInput(personalInformation.lastName);
    await this.fillSexInput(personalInformation.sex);
    await this.fillExperienceInput(personalInformation.experience);
    await personalInformation.profession.forEach(async (profession:string) => {
      await this.fillProfessionInput(profession);
    });
    await this.uploadImage(personalInformation.file);
    await personalInformation.tools.forEach(async (tool: string) => {
      await this.fillToolsInput(tool);
    });
    await this.fillContinentInput(personalInformation.continent);
    await personalInformation.commands.forEach(async (command: string) => {
      await this.fillCommandsInput(command);
    });
  }
}
