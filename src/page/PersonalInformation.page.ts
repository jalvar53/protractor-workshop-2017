import { $, ElementFinder, element, by, promise } from 'protractor';

export class PersonalInformationPage {

  public get title(): ElementFinder {
    return $('.wpb_wrapper > h1');
  }

  private get finalButton(): ElementFinder {
    return $('#submit');
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

  public async fillForm(personalInformation: {[prop: string]: any}): Promise<void> {
    await this.fillFirstNameInput(personalInformation.firstName);
    await this.fillLastNameInput(personalInformation.lastName);
    await this.fillSexInput(personalInformation.sex);
    await this.fillExperienceInput(personalInformation.experience);
    await personalInformation.profession.forEach(async (profession:string) => {
      await this.fillProfessionInput(profession);
    });
    await personalInformation.tools.forEach(async (tool: string) => {
      await this.fillToolsInput(tool);
    });
    await this.fillContinentInput(personalInformation.continent);
    await personalInformation.commands.forEach(async (command: string) => {
      await this.fillCommandsInput(command);
    });

    return this.finalButton.click();
  }
}
