"use strict";
/** @class browser */

var FiltersBase = require("../../lib/FiltersBase.js");

class OrderFilters extends FiltersBase {

    /**
     * Filters orders by specified parameters
     *
     * @param page
     * @param filterData
     * @returns {OrderFilters}
     */
    filterByURL(filterData) {

        super.filterByURL("orders", filterData);

        return this;
    }

}

module.exports = OrderFilters;