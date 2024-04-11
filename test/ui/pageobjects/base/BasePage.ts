export class BasePage {
    async getElement(selector: string): Promise<any> {
        if (typeof selector !== 'string' || !selector) {
            throw new Error('Invalid selector provided');
        }
        return await $(selector);
    }

    async click(selector: string): Promise<void> {
        const element = await this.getElement(selector);
        await element.waitForDisplayed({ timeout: 20000, timeoutMsg: 'Element not displayed for click action' });
        await element.click();
    }

    async setValue(selector: string, value: string): Promise<void> {
        const element = await this.getElement(selector);
        await element.setValue(value);
    }

    async clearText(selector: string): Promise<void> {
        const element = await this.getElement(selector);
        await element.clearValue();
    }

    async isDisplayed(selector: string): Promise<boolean> {
        try {
            await browser.waitUntil(async () => {
                const element = await this.getElement(selector);
                return await element.isDisplayed();
            }, {
                timeout: 10000,
                timeoutMsg: 'Element did not display in the specified time',
                interval: 2000
            });
            return true;
        } catch (error) {
            console.error('Error while checking if element is displayed: \n', error);
            return false;
        }
    }

    // Using promise then catch
    // async isDisplayed(element) {
    //     return browser.waitUntil(async () => {
    //         return await element.isDisplayed();
    //     }, {
    //         timeout: 10000,
    //         timeoutMsg: 'Element did not display in the specified time'
    //     }).then(() => true)
    //     .catch(error => {
    //         console.error('Error while checking if element is displayed: \n', error);
    //         return false;
    //     });
    // }

    async getText(selector: string): Promise<string> {
        const element = await this.getElement(selector);
        return await element.getText();
    }
}
