import { $, browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';

describe('Fill form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

    describe('Given another website', () => {
        beforeAll(async () => {
            await browser.get('http://toolsqa.com/automation-practice-form/');
        });

        describe('When the user fills every input', () => {
            beforeAll(async () => {
                await personalInformationPage.fillForm({
                    firstName: 'Alejandro',
                    lastName: 'Perdomo',
                    sex: 'Male',
                    experience: 7,
                    profession: ['Automation Tester'],
                    tools: ['Selenium Webdriver'],
                    continent: 'South America',
                    commands: [
                      'Browser Commands',
                      'Navigation Commands',
                      'Switch Commands',
                      'Wait Commands',
                      'WebElement Commands']
                });
            });

            it('The title should be "Practice Automation Form"', async () => {
                await expect(personalInformationPage.title.getText()).toBe("Practice Automation Form");
            });
        });
    })
});
