"use strict";
/** @class browser */

var ViewsBase = require("./../../../lib/ViewsBase.js");
var ProductPreview = require("./../ProductPreview.js");
var ProductDetailView = require("./../../ProductDetailView.js");

class ProductInGrid extends ViewsBase {
    constructor(productData) {
        super();
        this.preview = new ProductPreview(productData);

        this.productData = productData;
        this.id = productData.datatest;
    }

    // get buttonAddToCart(){
    //     return this.mainContaner.element("//div[@class='hover']//button[1]");
    // }
    //
    // get buttonStar(){
    //     return this.mainContaner.element("//div[@class='hover']//button[2]");
    // }
    //
    // get buttonCopie(){
    //     return this.mainContaner.element("//div[@class='hover']//button[3]");
    // }

    /**
     * Returns the product entity
     *
     * @param productData
     * @returns {ProductInGrid}
     */
    getProduct(productData) {
        return new this(productData);
    }

    // clickAddToCart(){
    //     browser.hoverElement(this.imageProduct);
    //     browser.clickElement(this.buttonAddToCart);
    // }

    get mainContainer() {
        return browser.element("[data-test='" + this.id + "']");
    }

    get imageProduct() {
        return this.mainContainer.element(".imageHolder");
    }

    /**
     * Clicks on the product Image to open Preview Panel
     *
     * @returns {ProductInGrid}
     */
    clickImage() {
        browser.clickElement(this.imageProduct);
        this.preview.mainContainer.waitForVisible();

        return this;
    }

    /**
     * Verifies Product Is Visible In ProductGrid Grid
     *
     * @param {Boolean} isVisible - true or false
     * @returns {ProductInGrid}
     */
    verifyVisibleInGrid() {
        log("Verifying product '" + this.productData.name + "' is visible in products grid..");
        browser.verifyElementIsVisible(views.gallery.productGrid.mainContainer.element("h1*=" + this.productData.name));

        return this;
    }

    /**
     * Verifies Product Is Not Visible In ProductGrid Grid
     *
     * @param {Boolean} isVisible - true or false
     * @returns {ProductInGrid}
     */
    verifyNotVisibleInGrid() {
        log("Verifying product '" + this.productData.name + "' is not visible in products grid..");
        browser.verifyElementIsNotVisible(views.gallery.productGrid.mainContainer.element("h1*=" + this.productData.name));

        return this;
    }

}

module.exports = ProductInGrid;