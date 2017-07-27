"use strict";
/** @class browser */

var ViewsBase = require("../../lib/ViewsBase.js");

var prData;

class ProductPreview extends ViewsBase {
    constructor(productData) {
        super();
        prData = productData;
    }

    get mainContainer() {
        return browser.element("#side-panel");
    }

    get linkName() {
        return browser.element("a=" + prData.name);

    }

    get buttonOfOrder() {
        return this.mainContainer.element("span*=Order");
    }

    get buttonAddToOrder() {
        return this.mainContainer.element("span=Add to Order");
    }

    get buttonRemoveFromOrder() {
        return this.mainContainer.element("span=Remove from Order");
    }

    /**
     * Navigates to Preview panel directly by URL
     *
     * @returns {NuorderViews}
     */
    navByURL() {
        log("Navigating to Preview panel of product '" + prData.name + "' by URL");
        super.navByURL("brand/" + global.activeBrandID + "/gallery/item/" + prData.id);
        this.mainContainer.waitForVisible();

        return this;
    }

    /**
     * Clicks on "Add to Orders" button if it exists and verifies that is was changed to "Remove from Orders".
     * If "Add to Orders" doesn't exist - just verifies that "Remove from Orders" button is present. to ensure the item was added to the cart
     *
     * @returns {NuorderViews}
     */
    clickAddToOrder() {
        this.buttonOfOrder.waitForVisible();
        if (this.buttonAddToOrder.isVisible()) {
            browser.clickElement(this.buttonAddToOrder);
        }
        expect(this.buttonRemoveFromOrder.isVisible()).toBe(true);

        return this;
    }
}

module.exports = ProductPreview;