"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");
var OrderDetails = require("./WorkingOrder/OrderDetails.js");
var OrderItemsAndDeliveries = require("./WorkingOrder/OrderItemsAndDeliveries.js");

class WorkingOrder extends ViewsBase {
    constructor() {
        super();
        this.orderDetails = new OrderDetails();
        this.orderItemsAndDeliveries = new OrderItemsAndDeliveries();
    }

    get frameLegacyApp(){
        return browser.element("iframe[id=legacy-app]");
    }

    open(){
        browser.waitForVisible(this.frameLegacyApp.selector,15000);
        browser.frame(this.frameLegacyApp.value);
    }
}

module.exports = WorkingOrder;