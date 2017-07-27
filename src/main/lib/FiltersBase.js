"use strict";
/** @class browser */

var ViewsBase = require("./ViewsBase.js");

class FiltersBase extends ViewsBase{

    /**
     * Filters by specified parameters
     *
     * @param page
     * @param filterData
     * @returns {NuorderViews}
     */
    filterByURL(page, filterData) {
        log("Filtering on " + page + " page...'");
        var filterUrl;

        if (page === 'orders'){
            filterUrl = "brand/" + global.activeBrandID + "/" + page + "?__" + filterData.by + "=" + filterData.value;
        }else {
            filterUrl = 'brand/' + global.activeBrandID + "/" + page + '?filters=%7B"' + filterData.by + '"%3A%5B"' + filterData.value + '"%5D%7D';
        }

        super.navByURL(filterUrl);

        return this;
    }

}

module.exports = FiltersBase;