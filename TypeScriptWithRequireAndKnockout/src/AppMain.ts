/// <reference path="./typings/require.d.ts" />
/// <reference path="./typings/knockout.d.ts" />

require.config({
    paths: {
        'knockout': 'libs/knockout'
   },
   shim: {
   }

});

require(["libs/domReady!", "App", "ViewModels/AppViewModel", "knockout"], (domReady, App, AppViewModel, ko) => {
    var app = new App.App(new AppViewModel.AppViewModel());
    app.run();
});
