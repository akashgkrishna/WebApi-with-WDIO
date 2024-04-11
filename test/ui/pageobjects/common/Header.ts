import { BasePage } from "../base/BasePage";

export class Header extends BasePage {
    private selectors = {
        loginButton : `button[mattooltip='Login']`,
        
    }

    async clickOnLoginButton(){
        await this.click(this.selectors.loginButton);
    }
}