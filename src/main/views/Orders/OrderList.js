"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");

class OrderList extends ViewsBase {

    get mainContainer() {
        return browser.element("[data-test='order-list']");
    }

    /**
     * Returns the order entity
     *
     * @param productData
     * @returns {OrderInList}
     */
    getOrder(orderData) {
        return new (require("./OrderList/OrderInList"))(orderData);
    }

}

module.exports = OrderList;