"use strict";

let NuorderViewsBase = require("./NuorderViews/NuorderViewsBase");

class NuorderViews extends NuorderViewsBase {

    get loginView() {
        return this._getCachedView("LoginView");
    }

    get navigationPanel() {
        return this._getCachedView("NavigationPanel");
    }

    get mainHeader() {
        return this._getCachedView("MainHeader");
    }

    get gallery() {
        return this._getCachedView("Gallery");
    }

    get workingOrder() {
        return this._getCachedView("WorkingOrder");
    }
}

global.views = new NuorderViews();
