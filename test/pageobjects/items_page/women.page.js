import Page from '../page';
import itemSelectors from "./item.selectors";

class WomenPage extends Page {

    async visitWomenContent () {
        await $(itemSelectors.womenMenuContentItem).waitForDisplayed();
        await $(itemSelectors.womenMenuContentItem).click();
    }

    async addToCartFromTheList (countOfItems) {
        await this.visitWomenContent();

        for (let index = 0; index < countOfItems; index++) {
            await $$(itemSelectors.itemsInTheList)[index].scrollIntoView();
            await $$(itemSelectors.itemsInTheList)[index].moveTo();
            await $$(itemSelectors.addToCartFirstItemInTheList)[index].waitForDisplayed();
            await $$(itemSelectors.addToCartFirstItemInTheList)[index].click();
            await $(itemSelectors.closeLayerCartTab).waitForDisplayed();
            await $(itemSelectors.closeLayerCartTab).click();
        }
    }

    async goToItem () {
        await this.visitWomenContent()
        await $(itemSelectors.firstItemInTheList).scrollIntoView();
        await $(itemSelectors.firstItemInTheList).moveTo();
        await $(itemSelectors.moreOption).click();
    }

    async goToCartFromItemsList () {
        await $(itemSelectors.cartElement).click();
    }
}

export default new WomenPage();
