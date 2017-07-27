var testData = require('./resourses/navigation.json');

describe('BVT: NAVIGATIONS', function() {

    it('should login as Admin (superuser)', function () {
        views.loginView.login(globals.users.admin[0].email, globals.users.admin[0].password);
    });

    it('should verify all sections are displayed', function () {
        views.mainHeader.verifyAllSectionsDisplay();
        views.navigationPanel.verifyAllSectionsDisplay();
    });

    // it('should navigate to Linesheets - verify page is opened', function () {
    //     views.navigationPanel.gotoLinesheets();
    //     views.linesheets.waitForPageIsLoaded();
    // });
    //
    // it('should navigate to Orders - verify page is opened', function () {
    //    views.navigationPanel.gotoOrders();
    //    views.orders.verifyOpened();
    // });

    it('should navigate to Custom Lists - verify page is opened', function () {
        views.navigationPanel.gotoCustomLists();
        views.customLists.verifyOpened();

    });
    //
    // it('should navigate to Products - verify page is opened', function () {
    //     views.navigationPanel.gotoProducts();
    //     views.gallery.verifyOpened();
    //
    // });

    it('should verify Brand selection', function () {
        views.mainHeader.selectBrand(testData.brand.name)
            .verifyBrandPickerValue(testData.brand.name);
    });

});