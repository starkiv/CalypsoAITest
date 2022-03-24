import LoginPage from "../pageobjects/login_page/login.page";
import WomenPage from "../pageobjects/items_page/women.page";
import ItemPage from "../pageobjects/items_page/item.page";
import CartPage from "../pageobjects/cart_page/cart.page";
import testData from '../../test_data/test_data.json';

describe('Check item page', () => {
    it('should be redirected to the item page', async () => {
        await LoginPage.open();
        await LoginPage.login(testData.email, testData.password);
        await WomenPage.goToItem();
        await ItemPage.assertItemTitle(testData.firstItemTitle);
    });

    it('should see correct item`s price', async () => {
        await ItemPage.assertItemPrice(testData.firstItemPrice);
    });

    it('should be redirected to the cart page', async () => {
        await ItemPage.addItemToCart();
        await ItemPage.goToCart();
        await CartPage.assertCartTitle(testData.cartTitle);
    });
});
