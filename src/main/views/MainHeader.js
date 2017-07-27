"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");

class MainHeader extends ViewsBase {
    get mainContainer() {
        return browser.element(".headerInner");
    }

    get brandPicker() {
        return $("[data-test='brand-picker']");
    }

    get inputBrandSearch() {
        return $("[data-test='brand-search']");
    }

    get spinnerCart() {
        return this.mainContainer.element("[mode='indeterminate']");
    }

    /**
     * TODO: rewrite with data-test
     * @returns {*}
     */
    get buttonCart() {
        // return this.mainContainer.element(":nth-child(7) svg span");
        return this.mainContainer.element("span=1");
    }

    get splashScreen() {
        return $("[data-test='splash-screen']");
    }


    /**
     * Verifies entering the application
     * Clicks on Splash Screen if it's visible
     * @returns {NuorderViews}
     */
    verifyAppLoaded() {
        log("Verifying you entered the application: ");
        browser.verifyElementIsVisible(this.brandPicker);
        this.clickSplashScreen();

        return this;
    }

    /**
     * Clicks on Splash Screen if it's visible
     * @returns {NuorderViews}
     */
    clickSplashScreen() {
        log("Clicking on splash screen of the brand (if visible): ");
        if (this.splashScreen.isVisible()) {
            browser.clickElement(this.splashScreen);
        }
        else {
            log("Splash screen is not visible");
        }

        return this;
    }

    /**
     * Waits for Splash Screen becomes visible
     * @returns {NuorderViews}
     */
    waitAndClickSplashScreen() {
        log("Waiting for Splash Screen becomes visible... ");
        this.splashScreen.waitForVisible();
        this.clickSplashScreen();

        return this;
    }

    /**
     * Verifies all sections are visible
     * @returns {NuorderViews}
     */
    verifyAllSectionsDisplay() {
        log("Verifying all 'Main Header' sections are displayed: ");
        browser.verifyElementIsVisible(this.brandPicker);

        return this;
    }

    /**
     * Chooses brand from Brand Picker:
     * - clicks on brand Picker bpx
     * - set @brandName into brand search field
     * - select the brand
     * - click on splash screan if it is visible
     * @param {string} brandName
     */
    selectBrand(brandName) {
        log("Selecting brand '" + brandName + "' through brand picker");
        browser.clickElement(this.brandPicker);
        browser.set(this.inputBrandSearch, brandName);
        var brandCode = brandName.replace(/ /g, "-").toLowerCase();
        browser.clickElement($("[data-test='" + brandCode + "']"));
        this.clickSplashScreen();

        return this;
    }

    /**
     * Verifies all sections are visible
     * @param {string} brandName
     */
    verifyBrandPickerValue(brandName) {
        browser.verifyElementIsVisible(browser.element((".//button[contains(., '" + brandName + "')]")));

        return this;
    }

    /**
     * Clicking on Cart icon
     * @returns {NuorderViews}
     */
    clickCart() {
        browser.waitForVisible(this.buttonCart.selector, 30000);
        browser.clickElement(this.buttonCart);

        return this;
    }

    waitForCartSpinnerIsNotVisible() {
        browser.waitForNotVisible(this.spinnerCart, 30000);
        return this;
    }


    //TODO
    // getActiveBrand(){
    //     return this.brandPicker.element("[data-test='active_brand']").getText();
    // }
}


module.exports = MainHeader;