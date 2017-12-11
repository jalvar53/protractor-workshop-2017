import { $, browser } from 'protractor';
import { PersonalInformationPage } from '../src/page';
import { DownloadService } from '../src/service/Download.service';
import { createHash } from 'crypto';

describe('Fill form', () => {
    const personalInformationPage: PersonalInformationPage = new PersonalInformationPage();
    const downloadService: DownloadService = new DownloadService();

    const formInformation = {
        firstName: 'Alejandro',
        lastName: 'Perdomo',
        sex: 'Male',
        experience: 7,
        file: 'resources/wow.jpg',
        professions: ['Automation Tester'],
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
                expect(await personalInformationPage.title.getText()).toBe("Practice Automation Form");
            });

            it('The image should be loaded', async () => {
                const pathIndex = formInformation.file.lastIndexOf('/') + 1;
                const filename = formInformation.file.substring(pathIndex);
                expect(await personalInformationPage.getImageName()).toMatch(filename);
            });

            describe('When the user downloads a file', () => {
                beforeAll(async () => {
                    formInformation['downloadFile'] = 'test-file.xlsx';
                    await personalInformationPage.fillForm(formInformation);
                });

                it('The file should be downloaded correctly', async () => {
                    const hash = createHash('sha256');
                    const shasum: string = 'f0a891cc6c7c0b1ff30527867830de2eb925697f9b8366e248f7fbb2bbd85c2b';
                    const downloadedFile = downloadService.readFileFromTemp('test-file.xlsx');
                    expect(hash.update(downloadedFile).digest('hex')).toBe(shasum);
                });
            });
        });
    });
});
