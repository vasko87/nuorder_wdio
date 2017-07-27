"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");
var OrderDetails = require("./WorkingOrder/OrderDetails.js");
var OrderItemsAndDeliveries = require("./WorkingOrder/OrderItemsAndDeliveries.js");
var WorkingOrderFooter = require("./WorkingOrder/WorkingOrderFooter.js");

class WorkingOrder extends ViewsBase {
    constructor() {
        super();
        this.open();
        this.orderDetails = new OrderDetails();
        this.orderItemsAndDeliveries = new OrderItemsAndDeliveries();
        this.orderFooter = new WorkingOrderFooter();
    }

    get frameLegacyApp() {
        return browser.element("iframe[id=legacy-app]");
    }

    get mainContainer() {
        return browser.element("[id='working_order']");
    }

    /**
     * Switches to WO frame
     */
    open() {
        log("Opening Working Orders...");
        browser.pause(5000);
        browser.waitForExist(this.frameLegacyApp.selector);
        browser.frame(this.frameLegacyApp.value);
        this.mainContainer.waitForVisible();
    }
}

module.exports = WorkingOrder;