"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");

class OrderDetails extends ViewsBase {
    constructor() {
        super();
    }

    get mainContainer() {
        return browser.element("[id='working_order_details']");
    }

    get inputOrderNumber() {
        return browser.element("#order_number");
    }

    get inputCompany() {
        return this.mainContainer.element("[id='recipient_company']");
    }

    get popupRecalculatingOrderTotals() {
        return browser.element("span=Recalculating order totals");
    }

    get inputBuyer() {
        return this.mainContainer.element("[id=recipient_buyer]");
    }

    get inputSalesRep() {
        return this.mainContainer.element("[id=sales_rep]");
    }

    get tabDetails() {
        return browser.element(".order_details");
    }

    /**
     * Clicks on the Order Details Tab
     * @returns {OrderDetails}
     */
    clickTab() {
        this.tabDetails.click();
        this.mainContainer.waitForVisible();

        return this;
    }

    /**
     * Gets Order number and save it in Order Data
     * @param orderData
     * @returns {OrderDetails}
     */
    setOrderNumber(orderData) {
        var timestamp = new Date().valueOf();
        log("Setting ORDER NUMBER = " + timestamp);
        this.inputOrderNumber.clearElement();
        this.inputOrderNumber.clearElement();
        browser.set(this.inputOrderNumber, timestamp);
        orderData["number"] = timestamp;

        return this;
    }

    /**
     * Gets Order number and save it in Order Data
     * @param orderData
     * @returns {OrderDetails}
     */
    getOrderNumber(orderData) {
        var order_number = this.inputOrderNumber.getValue();
        log("Getting ORDER NUMBER = " + order_number);
        orderData["number"] = order_number;

        return this;
    }

    /**
     * Selects Company @companyName
     * @param companyName
     * @returns {OrderDetails}
     */
    selectCompany(companyName) {
        browser.select(this.inputCompany, companyName);
        browser.waitForNotVisible(this.popupRecalculatingOrderTotals, 10000);

        return this;
    }

    /**
     * Selects Buyer Name @buyerName
     * @param buyerName
     * @returns {OrderDetails}
     */
    selectBuyer(buyerName) {
        browser.select(this.inputBuyer, buyerName);

        return this;
    }

    /**
     * Selects Sales Rep Name @salesRepName
     * @param salesRepName
     * @returns {OrderDetails}
     */
    selectSalesRep(salesRepName) {
        browser.select(this.inputSalesRep, salesRepName);

        return this;
    }
}

module.exports = OrderDetails;