"use strict";
/** @class browser */

var ViewsBase = require("../../lib/ViewsBase.js");

class ProductSearch extends ViewsBase {

    get inputSearchProducts() {
        return browser.element(".itemsLayout").element("[placeholder='Search Products']");
    }

    /**
     * Searches the product by @searchStr:
     * - Enters the @searchStr into Search field
     * - waits result
     * @param {string} searchStr
     * @returns {NuorderViews}
     */
    search(searchStr) {
        log("Searching product by search string '" + searchStr);
        browser.set(this.inputSearchProducts, searchStr);
        // TODO: remove hard wait, implement clever waiting for search is completed
        browser.pause(3000);

        return this;
    }
}

module.exports = ProductSearch;