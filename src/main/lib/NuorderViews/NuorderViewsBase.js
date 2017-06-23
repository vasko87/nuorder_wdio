"use strict";

class NuorderViewsBase {
    constructor() {
        this._loadedViews = {};
    }

    /**
     * @param viewName
     * @return {ViewsBase}
     */
    getByName(viewName) {
        return this._getCachedView(viewName);
    }

    _getCachedView(viewName) {
        if (!this._loadedViews[viewName]) {
            try {
                this._loadedViews[viewName] = new (require("../../views/" + viewName))();
            } catch (e) {
                throw new Error("View cannot be included: " + viewName + "\n" + e.toString())
            }
        }
        return this._loadedViews[viewName];
    }
}

module.exports = NuorderViewsBase;
