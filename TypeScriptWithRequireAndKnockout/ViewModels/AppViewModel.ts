/// <reference path="../typings/require.d.ts" />
/// <reference path="../typings/knockout.d.ts" />
/// <reference path="../typings/knockout.es5.d.ts" />

export class AppViewModel {

    title : string;

    constructor() {
        ko.track(this);
        this.title = 'My Sample';
    }
}
