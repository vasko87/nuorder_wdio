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

    get productDetails() {
        return this._getCachedView("ProductDetailView");
    }

    get linesheets() {
        return this._getCachedView("Linesheets");
    }

    get customLists() {
        return this._getCachedView("CustomLists");
    }

    get orders() {
        return this._getCachedView("Orders");
    }
}

global.views = new NuorderViews();
