import LoginPage from "../pageobjects/login_page/login.page";
import WomenPage from "../pageobjects/items_page/women.page";
import CartPage from "../pageobjects/cart_page/cart.page";
import testData from '../../test_data/test_data.json';
const countOfItems = 3;

describe('Check women items page', () => {
    it('should add three items to the cart', async () => {
        await LoginPage.open();
        await LoginPage.login(testData.email, testData.password);
        await WomenPage.addToCartFromTheList(countOfItems);
    });

    it('should see three items on the cart page', async () => {
        await WomenPage.goToCartFromItemsList();
        await CartPage.assertCountOfItems(countOfItems);
    });
});
