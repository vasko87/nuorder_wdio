"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");

class NavigationPanel extends ViewsBase {
    get navPanel(){
        return $("[role='navigation']");
    }

    get labelHome(){
        return $("a*=Home");
    }

    get labelLinesheets(){
        return $("a*=Linesheets");
    }

    get labelCustomLists(){
        return $("a*=Custom Lists");
    }

    get labelContacts(){
        return $("a*=Contacts");
    }

    get labelOrders(){
        return $("a*=Orders");
    }

    get labelCampaigns(){
        return $("a*=Campaigns");
    }

    get labelViewCompaigns(){
        return $("a*=View Compaigns");
    }

    get labelViewContactGroups(){
        return $("a*=View Contact Groups");
    }

    get labelCreateSmartGroup(){
        return $("a*=Create a Smart Group");
    }

    get labelCreateFixedGroup(){
        return $("a*=Create a Fixed Group");
    }

    get labelMedia(){
        return $("a*=Media");
    }

    get labelReporting(){
        return $("a*=Reporting");
    }

    get labelMarketplace(){
        return $("a*=Marketplace");
    }

    get labelFindNewBrands(){
        return $("a*=Find New Brands");
    }

    get labelFindNewAccounts(){
        return $("a*=Find New Accounts");
    }

    get labelSettings(){
        return $("a*=Settings");
    }

    get labelBrandAdmin(){
        return $("a*=Brand Admin");
    }

    get labelBrandManagemant(){
        return $("a*=Brand Managemant");
    }

    get labelNuORDERUtilities(){
        return $("a*=NuORDER Utilities");
    }

    get labelRetailerSettings(){
        return $("a*=Retailer Settings");
    }

    get labelTheWall(){
        return $("a*=The Wall");
    }

    get iconAvatar(){
        return $("[class='avatar circle']");
    }

    get labelAvatarName(){
        return $("div.name");
    }

    get labelAvatarEmail(){
        return $("div.email");
    }

    get labelEditProfile(){
        return $("a*=Edit Profile");
    }

    get labelLogout(){
        return $("a*=Logout");
    }

    /**
     * Verifies all sections are visible
     */
    verifyAllSectionsDisplay() {
        log("Verifying all 'Navigation Panel' sections are displayed: ");
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
    }

    /**
     * Mouse-over Navigation Panel
     */
    hoverNavigationPanel(){
        console.log("INFO: Moving mouse over Navigation Panel");
        this.navPanel.waitForVisible();
        this.navPanel.moveTo();
    }

    /**
     * Mouse-over Campaigns label
     * - mouse-over Navigation panel
     * - mouse over Campaigns
     */
    hoverCampaigns(){
        hoverNavigationPanel();
        console.log("INFO: Moving mouse over Campaigns label ");
        this.labelCampaigns.moveTo();
    }

    /**
     * Mouse-over Marketplace label
     * - mouse-over Navigation panel
     * - mouse over Marketplace
     */
    hoverMarketplace(){
        hoverNavigationPanel();
        console.log("INFO: Moving mouse over Marketplace label");
        this.labelMarketplace.moveTo();
    }

    /**
     * Mouse-over Settings label
     * - mouse-over Navigation panel
     * - mouse over Settings
     */
    hoverSettings(){
        hoverNavigationPanel();
        console.log("INFO: Moving mouse over Settings label");
        this.labelSettings.moveTo();
    }

    /**
     * Mouse-over Avatar Icon
     * - mouse-over Navigation panel
     * - mouse over Avatar Icon
     */
    hoverAvatarIcon(){
        browser.hoverElement(this.iconAvatar);
        return views;
    }

    /**
     * Navigates to Home page page:
     * - mouse-over Navigation Panel
     * - clicks on Home label
     */
    gotoHome(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Home page");
        this.labelHome.click();
    }

    /**
     * Navigates to Linesheets page:
     * - mouse-over Navigation Panel
     * - clicks on Linesheets label
     */
    gotoLinesheets(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Linesheets page");
        this.labelLinesheets.click();
    }

    /**
     * Navigates to Custom Lists page:
     * - mouse-over Navigation panel
     * - clicks on Custom Lists label
     */
    gotoCustomLists(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Custom Lists page");
        this.labelCustomLists.click();
    }

    /**
     * Navigates to Contacts page:
     * - mouse-over Navigation panel
     * - clicks on Contacts label
     */
    gotoContacts(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Contacts page");
        this.labelContacts.click();
    }

    /**
     * Navigates to Orders page:
     * - mouse-over Navigation panel
     * - clicks on Orders label
     */
    gotoOrders(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Orders page");
        this.labelOrders.click();
    }

    /**
     * Navigates to Campaigns page:
     * - mouse-over Navigation panel
     * - clicks on Campaigns label
     */
    gotoCampaigns(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Campaigns page");
        this.labelCampaigns.click();
    }

    /**
     * Navigates to Campaigns -> View Campaigns:
     * - mouse-over Navigation Panel
     * - mouse-over Compaigns
     * - clicks on View Campaigns label
     */
    gotoCampaigns_ViewCampaigns(){
        this.hoverCampaigns();
        console.log("INFO: Navigating to Campaigns -> View Campaigns");
        this.labelViewCompaigns.click();
    }

    /**
     * Navigates to Campaigns -> Contact Groups:
     * - mouse-over Navigation Panel
     * - mouse-over Compaigns
     * - clicks on Contact Groups label
     */
    gotoCampaigns_ViewContactGroups(){
        this.hoverCampaigns();
        console.log("INFO: Navigating to Campaigns -> Contact Groups");
        this.labelViewContactGroups.click();
    }

    /**
     * Navigates to Campaigns -> Create a Smart Group:
     * - mouse-over Navigation Panel
     * - mouse-over Compaigns
     * - clicks on Create a Smart Group label
     */
    gotoCampaigns_CreateSmartGroup(){
        this.hoverCampaigns();
        console.log("INFO: Navigating to Campaigns -> Create a Smart Group");
        this.labelCreateSmartGroup.click();
    }

    /**
     * Navigates to Campaigns -> Create a Smart Group:
     * - mouse-over Navigation Panel
     * - mouse-over Compaigns
     * - clicks on Create a Fixed Group label
     */
    gotoCampaigns_CreateFixedGroup(){
        this.hoverCampaigns();
        console.log("INFO: Navigating to Campaigns -> Create a Fixed Group");
        this.labelCreateFixedGroup.click();
    }

    /**
     * Navigates to Media page:
     * - mouse-over Navigation panel
     * - clicks on Media label
     */
    gotoMedia(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Media page");
        this.labelMedia.click();
    }

    /**
     * Navigates to Reporting page:
     * - mouse-over Navigation panel
     * - clicks on Reporting label
     */
    gotoReporting(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Reporting page");
        this.labelReporting.click();
    }

    /**
     * Navigates to Marketplace page:
     * - mouse-over Navigation panel
     * - clicks on Marketplace label
     */
    gotoMarketplace(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Marketplace page");
        this.labelMarketplace.click();
    }

    /**
     * Navigates to Marketplace -> Find New Brands:
     * - mouse-over Navigation panel
     * - mouse-over Marketplace label
     * - clicks on Find New Brands label
     */
    gotoMarketplace_FindNewBrands(){
        this.hoverMarketplace();
        console.log("INFO: Navigating to Marketplace -> Find New Brands");
        this.labelFindNewBrands.click();
    }

    /**
     * Navigates to Marketplace -> Find New Accounts:
     * - mouse-over Navigation panel
     * - mouse-over Marketplace label
     * - clicks on Find New Accounts label
     */
    gotoMarketplace_FindNewAccounts(){
        this.hoverMarketplace();
        console.log("INFO: Navigating to Marketplace -> Find New Accounts");
        this.labelFindNewBrands.click();
    }

    /**
     * Navigates to Settings page:
     * - mouse -over Navigation panel
     * - clicks on Settings page
     */
    gotoSettings(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to Settings page");
        this.labelSettings.click();
    }

    /**
     * Navigates to Settings -> Brand Admin:
     * - mouse-over Navigation panel
     * - mouse-over Settings label
     * - clicks on Brand Admin label
     */
    gotoSettings_BrandAdmin(){
        this.hoverSettings();
        console.log("INFO: Navigating to Settings -> Brand Admin");
        this.labelBrandAdmin.click();
    }

    /**
     * Navigates to Settings -> Brand Managemant:
     * - mouse-over Navigation panel
     * - mouse-over Settings label
     * - clicks on Brand Managemant label
     */
    gotoSettings_BrandManagemant(){
        this.hoverSettings();
        console.log("INFO: Navigating to Settings -> Brand Managemant");
        this.labelBrandManagemant.click();
    }

    /**
     * Navigates to Settings -> NuORDERUtilities:
     * - mouse-over Navigation panel
     * - mouse-over Settings label
     * - clicks on NuORDERUtilities label
     */
    gotoSettings_NuORDERUtilities(){
        this.hoverSettings();
        console.log("INFO: Navigating to Settings -> NuORDERUtilities");
        this.labelNuORDERUtilities.click();
    }

    /**
     * Navigates to Settings -> Retailer Settings:
     * - mouse-over Navigation panel
     * - mouse-over Settings label
     * - clicks on Retailer Settings label
     */
    gotoSettings_RetailerSettings(){
        this.hoverSettings();
        console.log("INFO: Navigating to Settings -> Retailer Settings");
        this.labelRetailerSettings.click();
    }

    /**
     * Navigates to The Wall page:
     * - mouse-over Navigation Panel icon
     * - clicks on The Wall label
     */
    gotoTheWall(){
        this.hoverNavigationPanel();
        console.log("INFO: Navigating to The Wall page");
        this.labelTheWall.click();
    }

    /**
     * Navigates to Edit Profile page:
     * - mouse -over Avatar icon
     * - clicks on Edit Profile page
     */
    gotoProfileEdit(){
        this.hoverAvatarIcon();
        console.log("INFO: Navigating to Edit Profile page");
        this.labelEditProfile.click();
    }

    /**
     * Clicks on logout
     * - mouse-over Avatar icon
     * - clicks on logout label
     */
    logout(){
        this.hoverAvatarIcon();
        log("Logout...");
        browser.clickElement(this.labelLogout);

        return views;
    }
}

module.exports = NavigationPanel;