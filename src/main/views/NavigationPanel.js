"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");

class NavigationPanel extends ViewsBase {
    get navPanel() {
        return browser.element(".//nav[@role='navigation']/div/a");
    }

    get labelHome() {
        return browser.element("span=Home");
    }

    get labelProducts() {
        return browser.element("span=Products");
    }

    get labelLinesheets() {
        return browser.element("span=Linesheets");
    }

    get labelCustomLists() {
        return browser.element("span=Custom Lists");
    }

    get labelContacts() {
        return browser.element("span=Contacts");
    }

    get labelOrders() {
        return browser.element("span=Orders");
    }

    get labelCampaigns() {
        return browser.element("span=Campaigns");
    }

    get labelViewCompaigns() {
        return browser.element("span=View Compaigns");
    }

    get labelViewContactGroups() {
        return browser.element("span=View Contact Groups");
    }

    get labelCreateSmartGroup() {
        return browser.element("span=Create a Smart Group");
    }

    get labelCreateFixedGroup() {
        return browser.element("span=Create a Fixed Group");
    }

    get labelMedia() {
        return browser.element("span=Media");
    }

    get labelReporting() {
        return browser.element("span=Reporting");
    }

    get labelMarketplace() {
        return browser.element("span=Marketplace");
    }

    get labelFindNewBrands() {
        return browser.element("span=Find New Brands");
    }

    get labelFindNewAccounts() {
        return browser.element("span=Find New Accounts");
    }

    get labelSettings() {
        return browser.element("span=Settings");
    }

    get labelBrandAdmin() {
        return browser.element("span=Brand Admin");
    }

    get labelBrandManagemant() {
        return browser.element("span=Brand Managemant");
    }

    get labelNuORDERUtilities() {
        return browser.element("span=NuORDER Utilities");
    }

    get labelRetailerSettings() {
        return browser.element("span=Retailer Settings");
    }

    get labelTheWall() {
        return browser.element("span=The Wall");
    }

    get iconAvatar() {
        return browser.element("[class='avatar circle']");
    }

    get labelAvatarName() {
        return browser.element("div.name");
    }

    get labelAvatarEmail() {
        return browser.element("div.email");
    }

    get labelEditProfile() {
        return browser.element("span=Edit Profile");
    }

    get labelLogout() {
        return browser.element("span=Logout");
    }

    /**
     * Verifies all sections are visible
     * @returns {NuorderViews}
     */
    verifyAllSectionsDisplay() {
        log("Verifying all 'Navigation Panel' sections are displayed: ");
        this.hoverNavigationPanel();
        browser.verifyElementIsVisible(this.labelHome);
        browser.verifyElementIsVisible(this.labelLinesheets);
        browser.verifyElementIsVisible(this.labelCustomLists);
        browser.verifyElementIsVisible(this.labelContacts);
        browser.verifyElementIsVisible(this.labelOrders);
        browser.verifyElementIsVisible(this.labelCampaigns);
        browser.verifyElementIsVisible(this.labelReporting);
        browser.verifyElementIsVisible(this.labelMarketplace);
        browser.verifyElementIsVisible(this.labelSettings);
        browser.verifyElementIsVisible(this.labelTheWall);
        browser.verifyElementIsVisible(this.labelTheWall);
        browser.verifyElementIsVisible(this.iconAvatar);

        browser.pause(1000);

        return this;
    }

    /**
     * Mouse-over Navigation Panel
     * @returns {NuorderViews}
     */
    hoverNavigationPanel() {
        log("Moving mouse over Navigation Panel");
        browser.hoverElement(this.navPanel);

        return this;
    }

    /**
     * Mouse-over Campaigns label
     * - mouse-over Navigation panel
     * - mouse over Campaigns
     * @returns {NuorderViews}
     */
    hoverCampaigns() {
        hoverNavigationPanel();
        log("Moving mouse over Campaigns label ");
        browser.hoverElement(this.labelCampaigns);

        return this;
    }

    /**
     * Mouse-over Marketplace label
     * - mouse-over Navigation panel
     * - mouse over Marketplace
     * @returns {NuorderViews}
     */
    hoverMarketplace() {
        hoverNavigationPanel();
        log("Moving mouse over Marketplace label");
        browser.hoverElement(this.labelMarketplace);

        return this;
    }

    /**
     * Mouse-over Settings label
     * - mouse-over Navigation panel
     * - mouse over Settings
     * @returns {NuorderViews}
     */
    hoverSettings() {
        hoverNavigationPanel();
        log("Moving mouse over Settings label");
        browser.hoverElement(this.labelSettings);

        return this;
    }

    /**
     * Mouse-over Avatar Icon
     * - mouse-over Navigation panel
     * - mouse over Avatar Icon
     * @returns {NuorderViews}
     */
    hoverAvatarIcon() {
        browser.hoverElement(this.iconAvatar);

        return views;
    }

    /**
     * Navigates to Home page page:
     * - mouse-over Navigation Panel
     * - clicks on Home label
     * @returns {NuorderViews}
     */
    gotoHome() {
        this.hoverNavigationPanel();
        log("Navigating to Home page");
        this.labelHome.click();

        return this;
    }

    /**
     * Navigates to Products page:
     * - mouse-over Navigation Panel
     * - clicks on Products label
     * @returns {NuorderViews}
     */
    gotoProducts() {
        this.hoverNavigationPanel();
        log("Navigating to Products page");
        browser.clickElement(this.labelProducts);

        return this;
    }

    /**
     * Navigates to Linesheets page:
     * - mouse-over Navigation Panel
     * - clicks on Linesheets label
     * @returns {NuorderViews}
     */
    gotoLinesheets() {
        this.hoverNavigationPanel();
        log("Navigating to Linesheets page");
        browser.clickElement(this.labelLinesheets);

        return this;
    }

    /**
     * Navigates to Custom Lists page:
     * - mouse-over Navigation panel
     * - clicks on Custom Lists label
     * @returns {NuorderViews}
     */
    gotoCustomLists() {
        this.hoverNavigationPanel();
        log("Navigating to Custom Lists page");
        browser.clickElement(this.labelCustomLists);

        return this;
    }

    /**
     * Navigates to Contacts page:
     * - mouse-over Navigation panel
     * - clicks on Contacts label
     * @returns {NuorderViews}
     */
    gotoContacts() {
        this.hoverNavigationPanel();
        log("Navigating to Contacts page");
        this.labelContacts.click();

        return this;
    }

    /**
     * Navigates to Orders page:
     * - mouse-over Navigation panel
     * - clicks on Orders label
     * @returns {NuorderViews}
     */
    gotoOrders() {
        this.hoverNavigationPanel();
        log("Navigating to Orders page");
        browser.clickElement(this.labelOrders);

        return this;
    }

    /**
     * Navigates to Campaigns page:
     * - mouse-over Navigation panel
     * - clicks on Campaigns label
     * @returns {NuorderViews}
     */
    gotoCampaigns() {
        this.hoverNavigationPanel();
        log("Navigating to Campaigns page");
        this.labelCampaigns.click();

        return this;
    }

    /**
     * Navigates to Campaigns -> View Campaigns:
     * - mouse-over Navigation Panel
     * - mouse-over Compaigns
     * - clicks on View Campaigns label
     * @returns {NuorderViews}
     */
    gotoCampaigns_ViewCampaigns() {
        this.hoverCampaigns();
        log("Navigating to Campaigns -> View Campaigns");
        this.labelViewCompaigns.click();

        return this;
    }

    /**
     * Navigates to Campaigns -> Contact Groups:
     * - mouse-over Navigation Panel
     * - mouse-over Compaigns
     * - clicks on Contact Groups label
     * @returns {NuorderViews}
     */
    gotoCampaigns_ViewContactGroups() {
        this.hoverCampaigns();
        log("Navigating to Campaigns -> Contact Groups");
        this.labelViewContactGroups.click();

        return this;
    }

    /**
     * Navigates to Campaigns -> Create a Smart Group:
     * - mouse-over Navigation Panel
     * - mouse-over Compaigns
     * - clicks on Create a Smart Group label
     * @returns {NuorderViews}
     */
    gotoCampaigns_CreateSmartGroup() {
        this.hoverCampaigns();
        log("Navigating to Campaigns -> Create a Smart Group");
        this.labelCreateSmartGroup.click();

        return this;
    }

    /**
     * Navigates to Campaigns -> Create a Smart Group:
     * - mouse-over Navigation Panel
     * - mouse-over Compaigns
     * - clicks on Create a Fixed Group label
     * @returns {NuorderViews}
     */
    gotoCampaigns_CreateFixedGroup() {
        this.hoverCampaigns();
        log("Navigating to Campaigns -> Create a Fixed Group");
        this.labelCreateFixedGroup.click();

        return this;
    }

    /**
     * Navigates to Media page:
     * - mouse-over Navigation panel
     * - clicks on Media label
     * @returns {NuorderViews}
     */
    gotoMedia() {
        this.hoverNavigationPanel();
        log("Navigating to Media page");
        this.labelMedia.click();

        return this;
    }

    /**
     * Navigates to Reporting page:
     * - mouse-over Navigation panel
     * - clicks on Reporting label
     * @returns {NuorderViews}
     */
    gotoReporting() {
        this.hoverNavigationPanel();
        log("Navigating to Reporting page");
        this.labelReporting.click();

        return this;
    }

    /**
     * Navigates to Marketplace page:
     * - mouse-over Navigation panel
     * - clicks on Marketplace label
     * @returns {NuorderViews}
     */
    gotoMarketplace() {
        this.hoverNavigationPanel();
        log("Navigating to Marketplace page");
        this.labelMarketplace.click();

        return this;
    }

    /**
     * Navigates to Marketplace -> Find New Brands:
     * - mouse-over Navigation panel
     * - mouse-over Marketplace label
     * - clicks on Find New Brands label
     * @returns {NuorderViews}
     */
    gotoMarketplace_FindNewBrands() {
        this.hoverMarketplace();
        log("Navigating to Marketplace -> Find New Brands");
        this.labelFindNewBrands.click();

        return this;
    }

    /**
     * Navigates to Marketplace -> Find New Accounts:
     * - mouse-over Navigation panel
     * - mouse-over Marketplace label
     * - clicks on Find New Accounts label
     * @returns {NuorderViews}
     */
    gotoMarketplace_FindNewAccounts() {
        this.hoverMarketplace();
        log("Navigating to Marketplace -> Find New Accounts");
        this.labelFindNewBrands.click();

        return this;
    }

    /**
     * Navigates to Settings page:
     * - mouse -over Navigation panel
     * - clicks on Settings page
     * @returns {NuorderViews}
     */
    gotoSettings() {
        this.hoverNavigationPanel();
        log("Navigating to Settings page");
        this.labelSettings.click();

        return this;
    }

    /**
     * Navigates to Settings -> Brand Admin:
     * - mouse-over Navigation panel
     * - mouse-over Settings label
     * - clicks on Brand Admin label
     * @returns {NuorderViews}
     */
    gotoSettings_BrandAdmin() {
        this.hoverSettings();
        log("Navigating to Settings -> Brand Admin");
        this.labelBrandAdmin.click();

        return this;
    }

    /**
     * Navigates to Settings -> Brand Managemant:
     * - mouse-over Navigation panel
     * - mouse-over Settings label
     * - clicks on Brand Managemant label
     * @returns {NuorderViews}
     */
    gotoSettings_BrandManagemant() {
        this.hoverSettings();
        log("Navigating to Settings -> Brand Managemant");
        this.labelBrandManagemant.click();

        return this;
    }

    /**
     * Navigates to Settings -> NuORDERUtilities:
     * - mouse-over Navigation panel
     * - mouse-over Settings label
     * - clicks on NuORDERUtilities label
     * @returns {NuorderViews}
     */
    gotoSettings_NuORDERUtilities() {
        this.hoverSettings();
        log("Navigating to Settings -> NuORDERUtilities");
        this.labelNuORDERUtilities.click();

        return this;
    }

    /**
     * Navigates to Settings -> Retailer Settings:
     * - mouse-over Navigation panel
     * - mouse-over Settings label
     * - clicks on Retailer Settings label
     * @returns {NuorderViews}
     */
    gotoSettings_RetailerSettings() {
        this.hoverSettings();
        log("Navigating to Settings -> Retailer Settings");
        this.labelRetailerSettings.click();

        return this;
    }

    /**
     * Navigates to The Wall page:
     * - mouse-over Navigation Panel icon
     * - clicks on The Wall label
     * @returns {NuorderViews}
     */
    gotoTheWall() {
        this.hoverNavigationPanel();
        log("Navigating to The Wall page");
        this.labelTheWall.click();

        return this;
    }

    /**
     * Navigates to Edit Profile page:
     * - mouse -over Avatar icon
     * - clicks on Edit Profile page
     * @returns {NuorderViews}
     */
    gotoProfileEdit() {
        this.hoverAvatarIcon();
        log("Navigating to Edit Profile page");
        this.labelEditProfile.click();

        return this;
    }

    /**
     * Clicks on logout
     * - mouse-over Avatar icon
     * - clicks on logout label
     * @returns {NuorderViews}
     */
    logout() {
        this.hoverAvatarIcon();
        log("Logout...");
        browser.clickElement(this.labelLogout);

        return this;
    }
}

module.exports = NavigationPanel;