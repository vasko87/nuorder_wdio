"use strict";
/** @class browser */

var ViewsBase = require("./../../../lib/ViewsBase.js");

var prData;

class ProductPreview extends ViewsBase {
    constructor(productData) {
        super();
        prData = productData;
    }

    get mainContainer(){
        return browser.element("#side-panel");
    }

    get buttonAddToOrder(){
        return this.mainContainer.element("span=Add to Order");
    }

    get buttonRemoveFromOrder(){
        return this.mainContainer.element("span=Remove from Order");
    }

    /**
     * Navigates to Preview panel directly by URL
     *
     * @returns {ProductPreview}
     */
    navByURL(){
        log("Navigating to Preview panel of product '" + prData.name + "' by URL");
        browser.go(browser.baseUrl + "/brand/" + prData.brand_id + "/gallery/item/" + prData.id);
        views.mainHeader.waitAndClickSplashScrean();
        this.mainContainer.waitForVisible();

        return this;
    }

    /**
     * Clicks on "Add to Order" button if it exists and verifies that is was changed to "Remove from Order".
     * If "Add to Order" doesn't exist - just verifies that "Remove from Order" button is present. to ensure the item was added to the cart
     *
     * @returns {ProductPreview}
     */
    clickAddToOrder(){
        if (this.buttonAddToOrder.isVisible()) {
            browser.clickElement(this.buttonAddToOrder);
        }
        expect(this.buttonRemoveFromOrder.isVisible()).toBe(true);

        return this;
    }

}

module.exports = ProductPreview;