/**
 * Created by maria on 6/8/17.
 */
"use strict";
/** @class browser */

var ViewsBase = require("../lib/ViewsBase.js");

var prData;

class ProductDetailView extends ViewsBase {
    constructor(productData) {
        super();
        prData = productData;
    }

    get mainContainer() {
    }

    get buttonAddToOrder() {
    }

    get buttonRemoveFromOrder() {
    }

    /**
     * Returns the product entity
     * @param productData
     * @returns {ProductDetailView}
     */
    getProduct(productData) {
        return new this(productData);
    }

    /**
     * Navigates to Detail view directly by URL
     * @returns {NuorderViews}
     */
    navByURL() {
        log("Navigating to Detail view of product '" + prData.name + "' by URL");
        super.navByURL("brand/" + global.activeBrandID + "/item/" + prData.id);
        this.mainContainer.waitForVisible();

        return this;
    }

    /**
     * Clicks on "Add to Orders" button if it exists and verifies that is was changed to "Remove from Orders".
     * If "Add to Orders" doesn't exist - just verifies that "Remove from Orders" button is present. to ensure the item was added to the cart
     * @returns {NuorderViews}
     */
    clickAddToOrder() {
        if (this.buttonAddToOrder.isVisible()) {
            browser.clickElement(this.buttonAddToOrder);
        }
        expect(this.buttonRemoveFromOrder.isVisible()).toBe(true);

        return this;
    }

}

module.exports = ProductDetailView;