import { $, browser } from 'protractor';
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
    });
});
