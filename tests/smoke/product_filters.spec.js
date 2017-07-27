var testData = require('./resourses/product_filters.json');

describe('smoke: PRODUCT FILTERS', function() {

    it('should login as Admin (superuser)', function () {
        views.loginView.login(globals.users.admin[0].email, globals.users.admin[0].password);
    });

    it('should filter useing URL and verify: \n' +
        ' 1). that correct products are shown: \n' +
        ' 2). that not expected products are not displayed in results:', function () {
        var filterIndex, productIndex;
        for(filterIndex = 0; filterIndex < testData.filters.length; filterIndex++){
            views.gallery.productFilters.filterByURL("gallery", testData.filters[filterIndex]);
            views.gallery.verifyOpened();
            for(productIndex = 0; productIndex < testData.filters[filterIndex].products.length; productIndex++){
                views.gallery.productGrid.getProduct(testData.filters[filterIndex].products[productIndex]).verifyVisibleInGrid();
            }
            for(productIndex = 0; productIndex < testData.filters[filterIndex].products_invisible.length; productIndex++){
                views.gallery.productGrid.getProduct(testData.filters[filterIndex].products_invisible[productIndex]).verifyNotVisibleInGrid();
            }
        }
    });
});