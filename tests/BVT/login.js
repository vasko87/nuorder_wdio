

describe('BVT', function() {

    var admin_email = globals.users.admin.email;
    var admin_password = globals.users.admin.password
    var brand = globals.bvt_suite.brand[0];

    // it('Login as admin > verify all sections are displayed', function () {
    //
    //     views.loginView.login(admin_email, admin_password)
    //         .mainHeader.verifyAllSectionsDisplay()
    //         .navigationPanel.verifyAllSectionsDisplay();
    // });

    it('Log in as admin and search for product > confirm search returns expected results', function () {

        views.loginView.login(admin_email, admin_password);
         //   .mainHeader.selectBrand(brand.name)
         //    .gallery.subSearch.searchProduct(brand.products[0].name)
         //    .gallery.subGrid.getProduct(brand.products[0]).assertVisibleInGrid(true)
         //                                                 .clickImage()
         //                                                 .preview.clickAddToOrder();
        views.mainHeader.clickCart();
            //product(brand.products[0]).preview.navByURL();
        views.workingOrder.open();
        views.workingOrder.orderDetails.selectCompany("My New Company");
    });
});