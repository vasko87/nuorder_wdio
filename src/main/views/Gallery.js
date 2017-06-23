"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");
var ProductsSearch = require("./ProductsLayout/ProductsSearch.js");
var ProductsFilters = require("./ProductsLayout/ProductsFilters.js");
var ProductsGrid = require("./ProductsLayout/ProductsGrid.js");

class Gallery extends ViewsBase {
    constructor() {
        super();
        this.subSearch = new ProductsSearch();
        this.subFilters = new ProductsFilters();
        this.subGrid = new ProductsGrid();
    }

    /** TODO
     * Navigates to Gallery directly by URL
     *
     * @returns {ProductsGallery}
     */
    navByURL(){
        log("Navigating to Gallery by URL");
        browser.go(browser.baseUrl + "/brand/" +  + "/gallery/item/" + prData.id);
        views.mainHeader.waitAndClickSplashScrean();
        this.mainContainer.waitForVisible();

        return this;
    }
}

module.exports = Gallery;