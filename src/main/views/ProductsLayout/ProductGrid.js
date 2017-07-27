"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");

class ProductGrid extends ViewsBase {

    /**
     * Returns the product entity
     *
     * @param productData
     * @returns {ProductInGrid}
     */
    getProduct(productData) {
        return new (require("./ProductGrid/ProductInGrid"))(productData);
    }

    get mainContainer() {
        return browser.element(".itemsLayout").element(".itemsMainColumn");
    }

}

module.exports = ProductGrid;