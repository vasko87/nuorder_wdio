"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");

class ProductsSearch extends ViewsBase {

    get inputSearchProducts(){
        return browser.element(".itemsLayout").element("[placeholder='Search Products']");
    }

    /**
     *
     * @param {string} searchStr
     * @returns {NuorderViews}
     */
    searchProduct(searchStr){
        log("Searching product by search string '" + searchStr);
        browser.set(this.inputSearchProducts, searchStr);

        return views;
    }
}

module.exports = ProductsSearch;