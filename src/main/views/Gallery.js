"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");
var ProductSearch = require("./ProductsLayout/ProductSearch.js");
var ProductFilters = require("./ProductsLayout/ProductFilters.js");
var ProductGrid = require("./ProductsLayout/ProductGrid.js");

class Gallery extends ViewsBase {
    constructor() {
        super();
        this.productSearch = new ProductSearch();
        this.productFilters = new ProductFilters();
        this.productGrid = new ProductGrid();
    }

    get label() {
        return browser.element("span=Browse Products");
    }

    /**
     * Navigates to Gallery directly by URL
     *
     * @returns {NuorderViews}
     */
    navByURL() {
        log("Navigating to Gallery by URL");
        super.navByURL("brand/" + global.activeBrandID + "/gallery");
        this.waitForPageIsLoaded();

        return this;
    }
}

module.exports = Gallery;