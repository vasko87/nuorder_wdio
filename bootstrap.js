/** @class browser */
require("./src/main/lib/NuorderViews");
global.globals = require('./globals.json');
global.activeBrand;

global.log = function log(msg) {
    console.log("\x1b[32m✓\x1b[0m %s", msg);
};

global.error = function log(msg) {
    console.log("\x1b[31m× %s\x1b[0m", msg);
};

// global.browser.on('command', function(payload) {
//     console.log("- selenium " + payload.method + ", %s", JSON.stringify(payload.data));
// });
//
// global.browser.on('error', function(payload) {
//     console.log("- selenium ERROR " + payload.method + ", %s", JSON.stringify(payload.data));
// });


/**
 * Custom browser command: Go to @url
 *
 * @method go
 * @param String url
 * @methodOf browser
 */
browser.addCommand("go", function(url){
    log(" -- Navigation to URL: '" + url + "'");
    browser.url(url);

    return browser;
});

/**
 * Custom browser command: Sets @value into the @element,
 * - logs
 * - Wait for @element visible
 * - sets the @value
 * - asserts that @value was successfully entered
 * @method set
 * @param WebElement element
 * @param String value
 * @methodOf browser
 */
browser.addCommand("set", function(element, value){
    log(" -- Setting value = '" + value + "' into element " + element.selector);
    element.waitForVisible();
    element.setValue(value);
    expect(browser.getValue(element.selector)).toBe(value);

    return browser;
});

/**
 * Custom browser command: Sets @value into the @element,
 * - logs
 * - Wait for @element visible
 * - sets the @value
 * - asserts that @value was successfully entered
 * @method select
 * @param WebElement element
 * @param String value
 * @methodOf browser
 */
browser.addCommand("select", function(element, value){
    log(" -- Select value = '" + value + "' for element " + element.selector);
    element.waitForVisible();
    element.click();
    // if (element.element("ul[class=chzn-results]").isVisible) {
    //
    // }
    browser.element("*=" + value).scroll();
    browser.element("*=" + value).click();
    expect(browser.getValue(element.selector)).toBe(value);

    return browser;
});

/**
 * Custom browser command: Clicks @element:
 * - logs
 * - Wait for @element visible
 * - clicks the @element
 * @method clickElement
 * @param WebElement element
 * @methodOf browser
 */
browser.addCommand("clickElement", function(element){
    log(" -- Clicking on element " + element.selector);
    element.waitForVisible();
    element.click();

    return browser;
});

/**
 * Custom browser command: Verify @element is visible:
 * - logs
 * - verifies @element is visible
 * @method verifyElementIsVisible
 * @param WebElement element
 * @methodOf browser
 */
browser.addCommand("verifyElementIsVisible", function(element){
    log(" -- Verifying element " + element.selector + " is visible ");
    element.waitForVisible();
    expect(element.isVisible()).toBe(true);

    return browser;
});

/**
 * Custom browser command: Moveing nouse over the @element
 * @method hoverElement
 * @param WebElement element
 * @methodOf browser
 */
browser.addCommand("hoverElement", function(element){
    log(" -- Moving mouse over element " + element.selector);
    browser.moveToObject(element.selector);

    return browser;
});

browser.on('error', function(e) {
    error(e.body.value.class);
})

