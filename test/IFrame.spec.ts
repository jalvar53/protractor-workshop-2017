import { browser } from 'protractor';
import { IFramePage } from '../src/page';

describe('Test IFrames', () => {
    const iFramePage: IFramePage = new IFramePage();

    describe('Given a website with an IFrame', () => {
        beforeAll(async () => {
            await browser.get('http://toolsqa.com/iframe-practice-page/');
        });

        describe('When the user changes the IFrame height', () => {
            beforeAll(async () => {
                await iFramePage.setIFrameHeight('1000');
            });

            describe('Then, when fetching the IFrame height', () => {
                it('Should be the same set before', async () => {
                    await expect(iFramePage.getIFrameHeight()).toBe('1000');
                });
            });
        });

        describe('When the user is at the main context', () => {
            it('Then, the title should be "Sample Iframe page"', async () => {
                await expect(iFramePage.getMainPageTitle()).toBe('Sample Iframe page');
            });
        });

        describe('When the user switches to the IFrame 1 context', () => {
            beforeAll(async () => {
                await iFramePage.formIFrameContext();
            });

            it('Then, the title should be "Practice Automation Form"', async () => {
                await expect(iFramePage.getFormIFramePageTitle()).toBe('Practice Automation Form');
            });
        });

        describe('When the user switches to the main context', () => {
            beforeAll(async () => {
                await iFramePage.mainContext();
            });

            it('Then, the title should be "Sample Iframe page" again"', async () => {
                await expect(iFramePage.getMainPageTitle()).toBe('Sample Iframe page');
            });
        });

    });
});
