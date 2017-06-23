"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");

class ProductsGrid extends ViewsBase {

    /**
     * Returns the product entity
     *
     * @param productData
     * @returns {Product}
     */
    getProduct(productData){
        return new (require("./Product.js"))(productData);
    }

    get mainContainer(){
        return browser.element(".itemsLayout").element(".itemsMainColumn");
    }

}

module.exports = ProductsGrid;