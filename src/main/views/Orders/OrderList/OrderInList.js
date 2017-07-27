"use strict";
/** @class browser */

var ViewsBase = require("./../../../lib/ViewsBase.js");

class OrderInList extends ViewsBase {
    constructor(orderData) {
        super();

        this.orderData = orderData;
        this.number = orderData.number;
    }

    /**
     * Returns the order entity
     *
     * @param orderData
     * @returns {OrderInList}
     */
    getOrder(orderData) {
        return new this(orderData);
    }

    get mainContainer() {
        return browser.element("[data-test='order-record-" + this.number + "']");
    }

    /**
     * Verifies Order Is Visible In Order List
     *
     * @returns {OrderInList}
     */
    verifyVisibleInList() {
        log("Verifying order '" + this.orderData.number + "' is visible in Order list..");
        browser.verifyElementIsVisible(views.orders.orderList.mainContainer.element(this.mainContainer.selector));

        return this;
    }

    /**
     * Verifies Order Is not Visible In Order List
     *
     * @returns {OrderInList}
     */
    verifyNotVisibleInList() {
        log("Verifying order '" + this.orderData.number + "' is not visible in Order list..");
        browser.verifyElementIsNotVisible(views.orders.orderList.mainContainer.element(this.mainContainer.selector));

        return this;
    }

}

module.exports = OrderInList;