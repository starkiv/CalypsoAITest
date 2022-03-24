import paymentSelectors from "./payment.selectors";
import testData from "../../../test_data/test_data.json";
import {expect} from "chai";

class PaymentPage {
    async submitShoppingSummary () {
        await $(paymentSelectors.shoppingSummaryCheckoutBtn).waitForDisplayed();
        await $(paymentSelectors.shoppingSummaryCheckoutBtn).click();
    }

    async submitAddress () {
        await $(paymentSelectors.addressCheckoutBtn).waitForDisplayed();
        await $(paymentSelectors.addressCheckoutBtn).click();
    }

    async submitShipping () {
        await $(paymentSelectors.proceedShippingPageBtn).waitForDisplayed();
        await $(paymentSelectors.proceedShippingPageBtn).click();
    }

    async submitTerms () {
        await $(paymentSelectors.terms).click();
    }

    async submitOrder () {
        await $(paymentSelectors.submitOrder).waitForDisplayed();
        await $(paymentSelectors.submitOrder).click();
    }

    async chooseBankWireMethod () {
        await $(paymentSelectors.bankwireMethod).waitForDisplayed();
        await $(paymentSelectors.bankwireMethod).click();
    }

    async assertShoppingSummary () {
        await $(paymentSelectors.paymentTitle).waitForDisplayed();
        const actualAddressPaymentPageTitle = await $(paymentSelectors.paymentTitle).getText();
        expect(actualAddressPaymentPageTitle).include(testData.shoppingPaymentTitle);
    }

    async assertAddressPageTitle () {
        await $(paymentSelectors.paymentTitle).waitForDisplayed();
        const actualAddressPaymentPageTitle = await $(paymentSelectors.paymentTitle).getText();
        expect(actualAddressPaymentPageTitle).include(testData.addressPaymentTitle);
    }

    async assertShippingPageTitle () {
        await $(paymentSelectors.paymentTitle).waitForDisplayed();
        const actualShippingPaymentPageTitle = await $(paymentSelectors.paymentTitle).getText();
        expect(actualShippingPaymentPageTitle).eq(testData.shippingPaymentTitle);
    }

    async assertPaymentMethodPageTitle () {
        await $(paymentSelectors.paymentTitle).waitForDisplayed();
        const actualPaymentMethodPaymentPageTitle = await $(paymentSelectors.paymentTitle).getText();
        expect(actualPaymentMethodPaymentPageTitle).include(testData.paymentMethodTitle);
    }

    async assertBankWirePageTitle () {
        await $(paymentSelectors.paymentTitle).waitForDisplayed();
        const actualOrderSummaryPaymentPageTitle = await $(paymentSelectors.orderSummary).getText();
        expect(actualOrderSummaryPaymentPageTitle).include(testData.bankWirePayment);
    }

    async assertOrderCompleted () {
        await $(paymentSelectors.paymentTitle).waitForDisplayed();
        const orderCompletedAlert = await $(paymentSelectors.orderCompletedAlert).getText();
        expect(orderCompletedAlert).eq(testData.orderComplete);
    }
}

export default new PaymentPage();
