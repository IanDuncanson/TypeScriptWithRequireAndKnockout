/// <reference path="./typings/require.d.ts" />
/// <reference path="./typings/knockout.d.ts" />

import ko = require('knockout');
import AppViewModel = require('ViewModels/AppViewModel');

export class App {
    private appViewModel: AppViewModel.AppViewModel;


    constructor(appViewModel: AppViewModel.AppViewModel) {
        this.appViewModel = appViewModel;
    }

    public run() {
        ko.applyBindings(this.appViewModel);
    }
}