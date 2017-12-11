import { $, browser, promise } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Fill form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const formInformation = {
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        file: 'resources\\wow.jpg',
        profession: ['Automation Tester'],
        tools: ['Selenium Webdriver'],
        continent: 'South America',
        commands: [
          'Browser Commands',
          'Navigation Commands',
          'Switch Commands',
          'Wait Commands',
          'WebElement Commands']
    };

    describe('Given another website', () => {
        beforeAll(async () => {
            await browser.get('http://toolsqa.com/automation-practice-form/');
        });

        describe('When the user fills every input', () => {
            beforeAll(async () => {
                await personalInformationPage.fillForm(formInformation);
            });

            it('The title should be "Practice Automation Form"', async () => {
                await expect(personalInformationPage.title.getText()).toBe("Practice Automation Form");
            });

            it('The image should be loaded', async () => {
                const pathIndex = formInformation.file.lastIndexOf('\\');
                const filename = formInformation.file.substring(pathIndex);
                await expect(personalInformationPage.getImageName()).toMatch(filename);
            });
        });
    });
});
