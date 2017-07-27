var testData = require('./resourses/login.json');

describe('BVT: LOGIN', function() {

    it('should NOT login with incorrect credantials - verifies error message', function () {
        for (i = 0; i < testData.users.invalid.length; i++){
            views.loginView.setLoginFields(testData.users.invalid[i].email, testData.users.invalid[i].password)
                .clickSubmit()
                .verifyLoginErrorMessage(testData.users.invalid[i].error);
        }
    });

    it('should login with correct credantials', function () {
        views.loginView.login(testData.users.admin[0].email, testData.users.admin[0].password);
    });

});