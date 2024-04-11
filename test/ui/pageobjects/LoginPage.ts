import { BasePage } from "./base/BasePage";
import { UserCredentials } from "../customTypes/UserCredentials";

export class LoginPage extends BasePage{
    private selectors = {
        loginTextField : `input[placeholder='Username']`,
        passwordTextField : `input[placeholder='Password']`,
        loginButton : `//span[text()='Login']`
    }

    async enterCredentials(credentials : UserCredentials){
        await this.setValue(this.selectors.loginTextField, credentials.username);
        await this.setValue(this.selectors.passwordTextField, credentials.password);
    }

    async clickOnLoginButton(){
        await this.click(this.selectors.loginButton);
    }
}