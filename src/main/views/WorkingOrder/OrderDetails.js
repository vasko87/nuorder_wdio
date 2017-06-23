"use strict";
/** @class browser */

var ViewsBase = require("./../../lib/ViewsBase.js");

class OrderDetails extends ViewsBase {
    constructor() {
        super();
    }

    get mainContainer(){
        return browser.element("[id=working_order_details]");
    }

    get inputCompany(){
        return this.mainContainer.element("[id=recipient_company_chzn]");
    }

    get inputBuyer(){
        return this.mainContainer.element("[id=recipient_buyer_chzn]");
    }

    get inputSalesRep(){
        return this.mainContainer.element("[id=sales_rep_chzn]");
    }

    selectCompany(company){
        browser.select(this.inputCompany, company);
    }


}

module.exports = OrderDetails;