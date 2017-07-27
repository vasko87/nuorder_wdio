"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");

class Linesheets extends ViewsBase {

    get label() {
        return this.mainContainer.element("span=Linesheets");
    }

    /**
     * Navigates to Linesheets page directly by URL
     *
     * @returns {ViewsBase}
     */
    navByURL() {
        log("Navigating to Linesheets by URL");
        super.navByURL("brand/" + global.activeBrandID + "/linesheets");
        this.waitForPageIsLoaded();

        return this;
    }
}

module.exports = Linesheets;