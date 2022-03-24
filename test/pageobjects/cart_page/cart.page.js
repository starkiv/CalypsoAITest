import cartSelectors from "./cart.selectors";
import testData from "../../../test_data/test_data.json";
import Page from "../page";
import {expect} from "chai";

class CartPage extends Page{

    async assertCartTitle () {
        const cartTitle = await $(cartSelectors.cartTitle).getText();
        expect(cartTitle).include(testData.cartTitle);
    }

    async assertCountOfItems (expectedCountOfItems) {
        const actualCountOfItems = await $$(cartSelectors.itemsInTheCart).length;
        expect(actualCountOfItems).eq(expectedCountOfItems);
    }
}

export default new CartPage();
