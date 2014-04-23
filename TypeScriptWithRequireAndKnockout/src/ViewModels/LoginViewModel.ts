/// <reference path="../typings/require.d.ts" />
/// <reference path="../typings/knockout.d.ts" />
/// <reference path="../typings/knockout.es5.d.ts" />

import ko = require('knockout');
import ILogin = require('../Interfaces/ILogin');

export class LoginViewModel {

    userName: KnockoutObservable<string>;
    password: string;
    caption: string = "Login";
    isEnabled: KnockoutObservable<boolean> = ko.observable(true);
    x: KnockoutObservable<boolean>;
    loginManager:ILogin.ILogin;

    constructor(loginManager:ILogin.ILogin) {
        this.userName = ko.observable("administrator");
        this.password = 'password';
        this.loginManager = loginManager;
    }

    ok() {

        this.isEnabled = ko.observable(false);

        this.loginManager.Login(this.userName(), this.password, this.loginCallback, this);
    }


    loginCallback(isSuccess: boolean, loginManager: ILogin.ILogin, thisCaller: LoginViewModel): any {
        thisCaller.isEnabled = ko.observable(true);
        thisCaller.userName = ko.observable("done");
        if (isSuccess) {
            alert('Login is successful, token =' + loginManager.token);
        }
        else {
            alert('Login failed, time of construction = ' + loginManager.token);
        }
    }

}
