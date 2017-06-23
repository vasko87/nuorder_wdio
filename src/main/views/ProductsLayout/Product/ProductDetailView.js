/**
 * Created by maria on 6/8/17.
 */
"use strict";
/** @class browser */

var ViewsBase = require("./../../../lib/ViewsBase.js");

var prData;

class ProductDetailView extends ViewsBase {
    constructor(productData) {
        super();
        prData = productData;
    }

    get mainContainer(){
    }

    get buttonAddToOrder(){
    }

    get buttonRemoveFromOrder(){
    }

    /**
     * Navigates to Detail view directly by URL
     *
     * @returns {ProductPreview}
     */
    navByURL(){
        log("Navigating to Detail view of product '" + prData.name + "' by URL");
        browser.go(browser.baseUrl + "/brand/" + prData.brand_id + "/item/" + prData.id);
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

module.exports = ProductDetailView;