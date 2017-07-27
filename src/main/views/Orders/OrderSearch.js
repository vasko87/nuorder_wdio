"use strict";
/** @class browser */

var ViewsBase = require("../../lib/ViewsBase.js");

class OrderSearch extends ViewsBase {

    get inputSearchOrders() {
        return browser.element("[placeholder='Search Orders']");
    }

    /**
     * Searches the Order by @searchStr:
     * - Enters the @searchStr into Search field
     * - waits for result
     * @param {string} searchStr
     * @returns {NuorderViews}
     */
    search(searchStr) {
        log("Searching order by search string '" + searchStr);
        browser.set(this.inputSearchOrders, searchStr);
        // TODO: remove hard wait, implement clever waiting for search is completed
        browser.pause(3000);

        return this;
    }
}

module.exports = OrderSearch;