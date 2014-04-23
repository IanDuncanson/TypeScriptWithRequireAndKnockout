/// <reference path="../../typings/mocha.d.ts" />
/// <reference path="../../typings/chai.d.ts" />
/// <reference path="../../typings/sinon.d.ts" />

import ko = require('knockout');
import ILogin = require('../../../src/Interfaces/ILogin');
import LoginViewModel = require('../../../src/ViewModels/LoginViewModel');

var expect = chai.expect;

var loginManagerMock;


describe('LoginViewModelTests', function () {
    beforeEach(function () {
        loginManagerMock = { Login: (userName: string, password: string, callback: any, callerObject: any) => { }, token: '', isSuccessful: true };
    });

    it("will create a login view model", function () {
        var loginVM = new LoginViewModel.LoginViewModel(loginManagerMock);
        expect(loginVM).to.be.an.instanceof(LoginViewModel.LoginViewModel);
    });
       
    it("should call Login when ok is called", function () {
        var loginSpy = sinon.spy(loginManagerMock, "Login");

        var loginVM = new LoginViewModel.LoginViewModel(loginManagerMock);
        loginVM.userName = ko.observable("TestUser");
        loginVM.password = "TestPassword";

        loginVM.ok();
        expect(loginSpy.calledWith("TestUser", "TestPassword")).to.be.ok;
    });

});
