"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");
var ProductPreview = require("./Product/ProductPreview.js");

class ProductsBase extends ViewsBase {
    /**
     * Returns the product entity
     *
     * @param productData
     * @returns {Product}
     */
    getProduct(productData){
        return new (require("./Product.js"))(productData);
    }
}

module.exports = ProductsBase;