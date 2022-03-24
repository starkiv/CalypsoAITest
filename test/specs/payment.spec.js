import LoginPage from "../pageobjects/login_page/login.page";
import WomenPage from "../pageobjects/items_page/women.page";
import ItemPage from "../pageobjects/items_page/item.page";
import PaymentPage from "../pageobjects/payment_page/payment.page";
import testData from '../../test_data/test_data.json';

describe('User can make an order', () => {
    it('should be redirected to the shopping summary payment page', async () => {
        await LoginPage.open();
        await LoginPage.login(testData.email, testData.password);
        await WomenPage.goToItem();
        await ItemPage.addItemToCart();
        await ItemPage.goToCart();
        await PaymentPage.assertShoppingSummary();
    });

    it('should be redirected to the addresses payment page', async () => {
        await PaymentPage.submitShoppingSummary();
        await PaymentPage.assertAddressPageTitle();
    });

    it('should be redirected to the shipping page', async () => {
        await PaymentPage.submitAddress();
        await PaymentPage.assertShippingPageTitle();
    });

    it('should be redirected to the payment method page', async () => {
        await PaymentPage.submitTerms();
        await PaymentPage.submitShipping();
        await PaymentPage.assertPaymentMethodPageTitle();
    });

    it('should be redirected to the bank wire summary page', async () => {
        await PaymentPage.chooseBankWireMethod();
        await PaymentPage.assertBankWirePageTitle();
    });

    it('should be able to submit an order', async () => {
        await PaymentPage.submitOrder();
        await PaymentPage.assertOrderCompleted();
    });

});
