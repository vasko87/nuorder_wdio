"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");
var OrderSearch = require("./Orders/OrderSearch.js");
var OrderFilters = require("./Orders/OrderFilters.js");
var OrderList = require("./Orders/OrderList.js");

class Orders extends ViewsBase {
    constructor() {
        super();
        this.orderSearch = new OrderSearch();
        this.orderFilters = new OrderFilters();
        this.orderList = new OrderList();
    }

    get label() {
        return browser.element("span=Orders");
    }

    /**
     * Navigates to Orders directly by URL
     * @returns {ViewsBase}
     */
    navByURL() {
        log("Navigating to Orders by URL");
        super.navByURL("brand/" + global.activeBrandID + "/orders");
        this.waitForPageIsLoaded();

        return this;
    }
}

module.exports = Orders;