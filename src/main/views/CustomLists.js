"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");

class CustomLists extends ViewsBase {

    get label() {
        return browser.element("span=Custom Lists");
    }

    /**
     * Navigates to Custom Lists page directly by URL
     *
     * @returns {ViewsBase}
     */
    navByURL() {
        log("Navigating to Custom Lists by URL");
        super.navByURL("brand/" + global.activeBrandID + "/lists");
        this.waitForPageIsLoaded();

        return this;
    }
}


module.exports = CustomLists;