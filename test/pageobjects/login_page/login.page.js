import Page from '../page';
import testData from "../../../test_data/test_data.json"
import loginSelectors from "./login.selectors";
import {expect} from "chai";

class LoginPage extends Page {

    async login (username, password) {
        await $(loginSelectors.loginEmail).setValue(username);
        await $(loginSelectors.loginPassword).setValue(password);
        await $(loginSelectors.submitLogin).click();
    }

    async assertLogin () {
        await $(loginSelectors.myAccountTitle).waitForDisplayed();
        const title = await $(loginSelectors.myAccountTitle).getText();
        await expect(title).eq(testData.myAccountTitle);
    }

    open () {
        return super.open('?controller=authentication&back=my-account');
    }
}

export default new LoginPage();
