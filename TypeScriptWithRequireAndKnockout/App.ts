/// <reference path="./typings/require.d.ts" />
/// <reference path="./typings/knockout.d.ts" />

import AppViewModel = require("ViewModels/AppViewModel");

export class App {
    private _appViewModel: AppViewModel.AppViewModel = new AppViewModel.AppViewModel();

    public run() {
        ko.applyBindings(this._appViewModel);

        window.addEventListener('unload', () => {
            alert(this._appViewModel.title);
        });

    }
}