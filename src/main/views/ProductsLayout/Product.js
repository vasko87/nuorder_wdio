"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");
var ProductPreview = require("./Product/ProductPreview.js");
var ProductDetailView = require("./Product/ProductDetailView.js");

class Product extends ViewsBase {
    constructor(productData) {
        super();
        this.preview = new ProductPreview(productData);
        this.details = new ProductDetailView(productData);

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
     * @returns {Product}
     */
    getProduct(productData){
        return new this(productData);
    }

    // clickAddToCart(){
    //     browser.hoverElement(this.imageProduct);
    //     browser.clickElement(this.buttonAddToCart);
    // }

    get mainContainer(){
        return browser.element("[data-test='" + this.id + "']");
    }

    get imageProduct(){
        return this.mainContainer.element(".imageHolder");
    }

    /**
     * Clicks on the product Image to open Preview Panel
     *
     * @returns {Product}
     */
    clickImage(){
        browser.hoverElement(this.imageProduct);
        browser.clickElement(this.imageProduct);

        return this;
    }

    /**
     * Verifies Product Is Visible In ProductsGrid Grid
     *
     * @param {Boolean} isVisible - true or false
     * @returns {Product}
     */
    assertVisibleInGrid(isVisible){
        log("Verifying product '" + this.productData.name + "' is visible in products grid");
        expect(views.gallery.subGrid.mainContainer.element("h1*=" + this.productData.name).isVisible()).toBe(isVisible);

        return this;
    }

}

module.exports = Product;