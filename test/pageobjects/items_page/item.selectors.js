const itemSelectors = {
    womenMenuContentItem: '[title="Women"].sf-with-ul',
    itemsInTheList: '#center_column > ul > li',
    firstItemInTheList: '#center_column > ul > li:nth-child(1) > div > div.left-block > div',
    moreOption: '#center_column > ul > li:nth-child(1) > div > div.right-block > div.button-container > a.button.lnk_view.btn.btn-default > span',
    addToCartFirstItemInTheList: '[title="Add to cart"]',
    closeLayerCartTab: '[title="Close window"]',
    successfullyAddedTitle: '#layer_cart > div > div.layer_cart_product > h2',
    cartElement: '#header > div:nth-child(3) > div > div > div:nth-child(3) > div > a',
    checkOutBtn: '#button_order_cart > span',
    itemTitle: '#center_column > div > div > div.pb-center-column.col-xs-12.col-sm-4 > h1',
    itemPrice: '#our_price_display',
    cartBtn: '#add_to_cart',
    proceedToCheckoutBtn: '#layer_cart > div.clearfix > div.layer_cart_cart.col-xs-12.col-md-6 > div.button-container > a > span',
    addToCartBtn: '#add_to_cart > button > span',
}

export default itemSelectors;
