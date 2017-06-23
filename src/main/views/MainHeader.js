"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");

class MainHeader extends ViewsBase {
    get mainContainer(){
        return browser.element(".headerInner");
    }

    get brandPicker(){
        return $("[data-test='brand-picker']");
    }

    get inputBrandSearch(){
        return $("[data-test='brand-search']");
    }

    get spinnerCart(){
        return this.mainContainer.element("[mode=indeterminate]");
    }

    get buttonCart(){
       // return this.mainContainer.element(":nth-child(7) svg span");
        return this.mainContainer.element("span*=1");
    }

    get splashScreen(){
        return $("[data-test='splash-screen']");
    }


    /**
     * Verifies entering the application
     * Clicks on Splash Screen if it's visible
     */
    verifyAppLoaded(){
        log("Verifying you entered the application: ");
        browser.verifyElementIsVisible(this.brandPicker);
        this.clickSplashScreen();
        return views;
    }

    /**
     * Clicks on Splash Screen if it's visible
     */
    clickSplashScreen(){
        log("Clicking on splash screen of the brand (if visible): ");
        if (this.splashScreen.isVisible()) {
            browser.clickElement(this.splashScreen);
        }
        else{
            log("Splash screen is not visible");
        }
        return views;
    }

    /**
     * Waits for Splash Screen becomes visible
     */
    waitAndClickSplashScreen(){
        log("Waiting for Splash Screen becomes visible... ");
        this.splashScreen.waitForVisible();
        this.clickSplashScreen();

        return views;
    }

    /**
     * Verifies all sections are visible
     */
    verifyAllSectionsDisplay() {
        log("Verifying all 'Main Header' sections are displayed: ");
        browser.verifyElementIsVisible(this.brandPicker);

        return views;
    }

    /**
     * @param {string} brandName
     */
    selectBrand(brandName) {
        log("Selecting brand '" + brandName + "' through brand picker");
        browser.clickElement(this.brandPicker);
        browser.set(this.inputBrandSearch, brandName);
        var brandCode = brandName.replace(/ /g, "-").toLowerCase();
        browser.clickElement($("[data-test='" + brandCode + "']"));
        this.waitAndClickSplashScreen();
        browser.verifyElementIsVisible(browser.element((".//button[contains(., '" + brandName+ "')]")));

        return views;
    }

    clickCart(){
        browser.waitForVisible(this.buttonCart.selector, 15000);
        browser.clickElement(this.buttonCart);
    }


    //TODO
    // getActiveBrand(){
    //     return this.brandPicker.element("[data-test='active_brand']").getText();
    // }
}


module.exports = MainHeader;