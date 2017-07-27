"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");

class LoginView extends ViewsBase {

    get inputEmail() {
        return $("[name='email']");
    }

    get inputPassword() {
        return $("[name='password']");
    }

    get buttonSubmit() {
        return $("[data-test='login-submit']");
    }

    get alertMessage() {
        return $("[data-test='alert-error']");
    }

    get alertFieldIsRequired() {
        return browser.element("div=This field is required.");
    }

    get linkForgotPassword() {
        return browser.element("[data-test='forgot-password-link']");
    }

    get inputForgotPasswordEmail() {
        return browser.element("[placeholder='Email']");
    }

    get buttonForgotPasswordSubmit() {
        return browser.element("[data-test=forgot-password-email]");
    }

    get successResetPasswordMessage() {
        return browser.element("//p[contains(text(),'Your password has been successfully reset. Please check your email.')]");
    }

    get buttonDismissResetPassword() {
        return browser.element("//p[contains(text(),'Your password has been successfully reset. Please check your email.')]");
    }

    /**
     * Sets value in Email field
     * @param email
     *
     * @returns {LoginView}
     */
    setLoginEmail(email) {
        browser.set(this.inputEmail, email);

        return this;
    }

    /**
     * Sets value in Password field
     * @param password
     * @returns {LoginView}
     */
    setLoginPassword(password) {
        browser.set(this.inputPassword, password);

        return this;
    }

    /**
     * Clicks on Submit button
     * @returns {LoginView}
     */
    clickSubmit() {
        browser.clickElement(this.buttonSubmit);
        browser.pause(250);

        return this;
    }

    /**
     * Sets values in Email and Password fields
     * @param email
     * @param password
     * @returns {LoginView}
     */
    setLoginFields(email, password) {
        this.setLoginEmail(email)
            .setLoginPassword(password);

        return this;
    }

    /**
     * Sets values on Login page and clicks Submit button
     * @param email
     * @param password
     * @returns {LoginView}
     */
    login(email, password) {
        log("Login into the app:");
        this.setLoginFields(email, password)
            .clickSubmit();
        views.mainHeader.verifyAppLoaded();

        return this;
    }

    /**
     * Verify Error message appears
     * @param message
     * @returns {LoginView}
     */
    verifyLoginErrorMessage(message) {
        log("Verifying Error message displayed: '" + message + "'");
        if (message == 'Invalid email and or password') {
            this.alertMessage.waitForVisible();
            expect(this.alertMessage.getText()).toBe(message);
        }
        else {
            expect(this.alertFieldIsRequired.isVisible()).toBe(true);
        }

        return this;
    }

    /**
     * Clicks on forgot password link
     * @returns {LoginView}
     */
    clickForgotPassword() {
        log("Clicking on 'Forgot your password?' link:");
        browser.clickElement(this.linkForgotPassword);

        return this;
    }

    /**
     * Enters forgot password Email
     * @param email
     * @returns {LoginView}
     */
    setForgotPasswordEmail(email) {
        log("Setting email in 'Forgot your password?' popup:");
        browser.set(this.inputForgotPasswordEmail, email);

        return this;
    }

    /**
     * Clicks forgot password Submit button
     * @param email
     * @returns {LoginView}
     */
    clickForgotPasswordSubmit() {
        log("Clicking on Submit button of 'Forgot your password?' popup:");
        browser.clickElement(this.buttonForgotPasswordSubmit);

        return this;
    }

    /**
     * Verifyes Success Message after reset password
     * @param email
     * @returns {LoginView}
     */
    verifySuccessResetPasswordMessage() {
        expect(this.successResetPasswordMessage.isVisible()).toBe(true);
        return this;
    }

    /**
     * Clicks dissmiss Reset Password
     * @param email
     * @returns {LoginView}
     */
    clickDissmissResetPassword() {
        log("Clicking on Dissmiss button of successfull reset password popup:");
        browser.clickElement(this.buttonDismissResetPassword);
        return this;
    }
}

module.exports = LoginView;
