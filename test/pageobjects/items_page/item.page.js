import Page from '../page';
import itemSelectors from "./item.selectors";
import {expect} from "chai";

class ItemPage extends Page {

    async assertItemTitle (expectedItemTitle) {
        const actualItemTitle = await $(itemSelectors.itemTitle).getText();
        expect(actualItemTitle).eq(expectedItemTitle);
    }

    async assertItemPrice (expectedItemPrice) {
        const actualItemPrice = await $(itemSelectors.itemPrice).getText();
        expect(actualItemPrice).eq(expectedItemPrice);
    }

    async addItemToCart () {
        await $(itemSelectors.addToCartBtn).waitForDisplayed();
        await $(itemSelectors.addToCartBtn).click();
    }

    async goToCart () {
        await $(itemSelectors.proceedToCheckoutBtn).waitForDisplayed();
        await $(itemSelectors.proceedToCheckoutBtn).click();
    }
}

export default new ItemPage();
