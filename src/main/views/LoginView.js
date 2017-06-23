"use strict";
/** @class browser */

var ViewsBase = require("./../lib/ViewsBase.js");

class LoginView extends ViewsBase {

    get inputEmail(){
        return $("[name='email']");
    }

    get inputPassword(){
        return $("[name='password']");
    }

    get buttonSubmit(){
        return $("[data-test='login-submit']");
    }

    get alertMessage(){
        return $("[data-test='alert-error']");
    }

    get alertFieldIsRequired(){
        return browser.element("//div[text()='This field is required.']");
    }

    get linkForgotPassword(){
        return browser.element("[data-test='forgot-password-link']");
    }

    get inputForgotPasswordEmail(){
        return browser.element("[placeholder='Email']");
    }

    get buttonForgotPasswordSubmit(){
        return browser.element("[data-test=forgot-password-email]");
    }

    get successResetPasswordMessage(){
        return browser.element("//p[contains(text(),'Your password has been successfully reset. Please check your email.')]");
    }

    get buttonDismissResetPassword(){
        return browser.element("//p[contains(text(),'Your password has been successfully reset. Please check your email.')]");
    }

    /**
     * Sets value in Email field
     * @param email
     */
    setLoginEmail(email){
        browser.set(this.inputEmail, email);
        return this;
    }

    /**
     * Sets value in Password field
     * @param password
     */
    setLoginPassword(password){
        browser.set(this.inputPassword, password);
        return this;
    }

    /**
     * Clicks on Submit button
     */
    clickSubmit(){
        browser.clickElement(this.buttonSubmit);
        return this;
    }

    /**
     * Sets values in Email and Password fields
     * @param email
     * @param password
     */
    setLoginFields(email, password){
        this.setLoginEmail(email)
            .setLoginPassword(password);
        return this;
    }

    /**
     * Sets values on Login page and clicks Submit button
     * @param email
     * @param password
     */
    login(email, password){
        log("Login into the app:")
        this.setLoginFields(email, password)
            .clickSubmit();
        views.mainHeader.verifyAppLoaded();
        return views;
    }

    /**
     * Verify Error message appears
     * @param message
     */
    verifyLoginErrorMessage(message){
        log("Verifying Error message displayed: '" + message + "'");
        if (message != '') {
            this.alertMessage.waitForVisible();
            expect(this.alertMessage.getText()).toBe(message);
        }
        else{
            expect(this.alertFieldIsRequired.isVisible()).toBe(true);
        }
        return this;
    }

    clickForgotPassword(){
        log("Clicking on 'Forgot your password?' link:" );
        browser.clickElement(this.linkForgotPassword);
        return this;
    }

    setForgotPasswordEmail(email){
        log("Setting email in 'Forgot your password?' popup:" );
        browser.set(this.inputForgotPasswordEmail, email);
        return this;
    }

    clickForgotPasswordSubmit(){
        log("Clicking on Submit button of 'Forgot your password?' popup:" );
        browser.clickElement(this.buttonForgotPasswordSubmit);
        return this;
    }

    verifySuccessResetPasswordMessage(){
        expect(this.successResetPasswordMessage.isVisible()).toBe(true);
        return this;
    }

    clickDissmissResetPassword(){
        log("Clicking on Dissmiss button of successfull reset password popup:" );
        browser.clickElement(this.buttonDismissResetPassword);
        return this;
    }
}

module.exports = LoginView;
