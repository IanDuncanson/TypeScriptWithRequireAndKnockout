/// <reference path="./typings/require.d.ts" />
/// <reference path="./typings/knockout.d.ts" />

require.config({
    paths: {
    },
    shim: {
    }

});

require(["App"], (App) => {
    window.addEventListener('load', () => {
        var app = new App.App();
        app.run();
    });
});
