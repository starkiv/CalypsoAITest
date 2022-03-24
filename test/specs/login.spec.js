import LoginPage from '../pageobjects/login_page/login.page';
import testData from '../../test_data/test_data.json'

describe('Check login page', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login(testData.email, testData.password);
        await LoginPage.assertLogin();
    });
});
