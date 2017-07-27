"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");

class WorkingOrderFooter extends ViewsBase {
    constructor() {
        super();
    }

    get mainContainer() {
        return browser.element(".actions");
    }

    get buttonBack() {
        return browser.element("div=BACK");
    }

    get buttonNext() {
        return browser.element("div=NEXT");
    }

    get buttonSubmit() {
        return browser.element("div=Submit Order");
    }

    /**
     * Clicks on Back button
     * @returns {WorkingOrderFooter}
     */
    clickBack() {
        browser.clickElement(this.buttonBack);

        return this;
    }

    /**
     * Clicks on Next button
     * @returns {WorkingOrderFooter}
     */
    clickNext() {
        browser.clickElement(this.buttonNext);

        return this;
    }

    /**
     * Clicks on Submit button
     * @returns {WorkingOrderFooter}
     */
    clickSubmit() {
        browser.clickElement(this.buttonSubmit);
        browser.pause(2000);

        return this;
    }

}

module.exports = WorkingOrderFooter;