var testData = require('./resourses/order_filters.json');

describe('BVT: ORDERS FILTERS', function() {

    it('should login as Admin (superuser)', function () {
        views.loginView.login(globals.users.admin[0].email, globals.users.admin[0].password);
    });

    it('should filter useing URL and verify: \n' +
        ' 1). that correct orders are shown: \n' +
        ' 2). that not expected orders are not displayed in results:', function () {
        var filterIndex, orderIndex;
        for(filterIndex = 0; filterIndex < testData.filters.length; filterIndex++){
            views.orders.orderFilters.filterByURL(testData.filters[filterIndex]);
            views.orders.verifyOpened();
            for(orderIndex = 0; orderIndex < testData.filters[filterIndex].orders.length; orderIndex++){
                views.orders.orderList.getOrder(testData.filters[filterIndex].orders[orderIndex]).verifyVisibleInList();
            }
            for(orderIndex = 0; orderIndex < testData.filters[filterIndex].orders_invisible.length; orderIndex++){
                views.orders.orderList.getOrder(testData.filters[filterIndex].orders_invisible[orderIndex]).verifyNotVisibleInList();
            }
        }
    });
});