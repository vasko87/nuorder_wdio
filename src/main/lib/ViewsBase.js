"use strict";
/** @class browser */

class ViewsBase {
    hasComponents(components) {
        if (!components) {
            return false;
        }
        if (!Array.isArray(components)) {
            components = components.toString().split(",");
        }
        components = components.map(function(s) { return s.trim() });
        for(let i = 0; i < components.length; i++) {
            if (!this[components[i]]) {
                console.log("ERROR: Component '" + components[i] + "' is not define");
                return false;
            }
            // else {
            //     if (!this[components[i]].waitForVisible()){
            //         console.log("ERROR: Component '" + components[i] + "' is not visible");
            //         return false;
            //     }
            //}
        }
        console.log("INFO: All components of the view are found");
        return true;
    }
    
    baseURL(){

    }

}

module.exports = ViewsBase;
