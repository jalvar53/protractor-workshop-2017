import { $, browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { resolve } from 'path';

describe('Fill form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();

    describe('Given another website', () => {
        beforeAll(async () => {
            await browser.get('http://toolsqa.com/automation-practice-form/');
        });

        describe('When the user fills every input', () => {
            beforeAll(async () => {
                await personalInformationPage.submit({
                    firstName: 'Alejandro',
                    lastName: 'Perdomo',
                    sex: 'Male',
                    experience: 7,
                    file: resolve('resources\\wow.jpg'),
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

            it('The image should be loaded', async () => {
                await expect(personalInformationPage.uploadImageInput.getAttribute('value')).toBe('wow.jpg');
            });
        });
    });
});
