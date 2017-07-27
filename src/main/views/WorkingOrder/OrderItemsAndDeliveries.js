"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");

class OrderItemsAndDeliveries extends ViewsBase {
    constructor() {
        super();
    }

    get mainContainer() {
        return browser.element("[id='working_order_content']");
    }

    get tabItemsAndDeliveries() {
        return browser.element(".items_deliveries");
    }

    /**
     * Clicks on the Items&Deliveries Tab
     * @returns {OrderItemsAndDeliveries}
     */
    clickTab() {
        this.tabItemsAndDeliveries.click();
        this.mainContainer.waitForVisible();
        browser.pause(5000);

        return this;
    }

    /**
     * Enters fields of Line Items (specified in @items_and_deloveries data)
     * @param items_and_deliveries
     * @returns {OrderItemsAndDeliveries}
     */
    enterLineItemsFields(items_and_deliveries) {
        for (var productIndex = 0; productIndex < items_and_deliveries.product.length; productIndex++) {

            var productContainer = browser.element("//h4[contains(.,'"
                + items_and_deliveries.product[productIndex].name + "')]/parent::div/parent::li");

            for (var itemIndex = 0; itemIndex < items_and_deliveries.product[productIndex].line_item_field.length; itemIndex++) {

                var li_field = productContainer.element("[name='"
                    + items_and_deliveries.product[productIndex].line_item_field[itemIndex].li_name + "']");

                if (items_and_deliveries.product[productIndex].line_item_field[itemIndex].type == "select") {
                    browser.select(li_field, items_and_deliveries.product[productIndex].line_item_field[itemIndex].value);
                } else {
                    browser.set(li_field, items_and_deliveries.product[productIndex].line_item_field[itemIndex].value);
                }
            }
        }

        return this;
    }

    /**
     * Enters sizes values of Line Items (specified in @items_and_deloveries data)
     * @param items_and_deliveries
     * @returns {OrderItemsAndDeliveries}
     */
    enterSizes(items_and_deliveries) {
        for (var productIndex = 0; productIndex < items_and_deliveries.product.length; productIndex++) {

            var productContainer = browser.element("//h4[contains(.,'" + items_and_deliveries.product[productIndex].name + "')]/parent::div/parent::li");

            for (var itemIndex = 0; itemIndex < items_and_deliveries.product[productIndex].size.length; itemIndex++) {

                var size = productContainer.element("[data-size='" + items_and_deliveries.product[productIndex].size[itemIndex].data_size + "']");
                browser.set(size, items_and_deliveries.product[productIndex].size[itemIndex].amount);
            }
        }

        return this;
    }

}

module.exports = OrderItemsAndDeliveries;