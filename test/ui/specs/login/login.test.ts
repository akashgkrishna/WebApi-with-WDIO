import { UserCredentials } from "../../customTypes/UserCredentials";
import { LoginPage } from "../../pageobjects/LoginPage";
import { Header } from "../../pageobjects/common/Header";
import { loginCredentialsJson } from "../../../exports/commonExports/jsonExports"

const header = new Header();
const loginPage = new LoginPage();

describe('Login Tests', async function () {
    it('should successfully perform the login flow', async function() {

        const environment = process.env.ENV;

        const credentials : UserCredentials = {
            username : loginCredentialsJson.validCredentials[environment].username,
            password : loginCredentialsJson.validCredentials[environment].password
        }

        await header.clickOnLoginButton();
        await loginPage.enterCredentials(credentials);
        await loginPage.clickOnLoginButton();
        
    });
});