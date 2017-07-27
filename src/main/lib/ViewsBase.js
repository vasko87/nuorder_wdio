"use strict";
/** @class browser */

class ViewsBase {
    hasComponents(components) {
        if (!components) {
            return false;
        }
        if (!Array.isArray(components)) {
            components = components.toString().split(",");
        }
        components = components.map(function (s) {
            return s.trim()
        });
        for (let i = 0; i < components.length; i++) {
            if (!this[components[i]]) {
                console.log("ERROR: Component '" + components[i] + "' is not define");
                return false;
            }
            // else {
            //     if (!this[components[i]].waitForVisible()){
            //         console.log("ERROR: Component '" + components[i] + "' is not visible");
            //         return false;
            //     }
            //}
        }
        console.log("INFO: All components of the view are found");
        return true;
    }

    get spinner() {
        return browser.element("[mode='indeterminate']");
    }

    get label() {
        return null;
    }

    verifyMessageInfo(message) {
        browser.verifyElementIsVisible(browser.element("span=" + message));

        return this;
    }

    navByURL(path) {
        browser.go(browser.baseUrl + "/" + path);

        return this;
    }

    /**
     * Verify that page is opened
     *
     * @returns {ViewsBase}
     */
    verifyOpened() {
        if (this.label) {
            browser.verifyElementIsVisible(this.label);
        }
        //TODO replase by waiting for spinner desappearing, like: browser.waitForNotVisible(this.spinner)
        browser.pause(2000);

        return this;
    }

    waitForPageIsLoaded() {
        this.label.waitForVisible();

        return this;

    }

}

module.exports = ViewsBase;
