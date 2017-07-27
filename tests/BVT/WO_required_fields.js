var testData = require('./resourses/WO.json');

describe('BVT: WORKING ORDER', function() {

    var brand = testData.brand[0];
    var order = testData.brand[0].order_data[0];

    it('should login as Admin (superuser)', function () {
        views.loginView.login(globals.users.admin[0].email, globals.users.admin[0].password);
    });

    it('should search product on Gallery page', function () {
        views.gallery.navByURL();
        views.gallery.productSearch.search(brand.products[0].name);
        views.gallery.productGrid.getProduct(brand.products[0]).verifyVisibleInGrid(true);
    });

    it('should open Product Preview and click "Add To Orders"', function () {
        var productOnGrid = views.gallery.productGrid.getProduct(brand.products[0]);
        productOnGrid.clickImage();
        productOnGrid.preview.clickAddToOrder();
    });

    it('should click Cart button of Main header"', function () {
        views.mainHeader.clickCart();
    });

    it('should click Next on Orders Details (missing entering company, buyer, sales rep)"', function () {
        views.workingOrder.orderDetails.getOrderNumber(order);
        views.workingOrder.orderFooter.clickNext();
    });

    it('should switch to Items&Deliveries page and enter Line Items data(LI fields, sizes)"', function () {
        views.workingOrder.orderItemsAndDeliveries.clickTab();
        views.workingOrder.orderItemsAndDeliveries.enterLineItemsFields(order.items_and_deliveries);
        views.workingOrder.orderItemsAndDeliveries.enterSizes(order.items_and_deliveries);
    });

    it('should click "Next" and "Submit" order', function () {
        views.workingOrder.orderFooter.clickNext();
        views.workingOrder.orderFooter.clickSubmit();
    });

    it('should verify', function () {
        views.orders.navByURL();
    });

    it('should search the Order > verify that the Order is visible in List', function () {
        views.orders.orderSearch.search(order.number);
        views.orders.orderList.getOrder(order).verifyVisibleInList(true);
    });

});