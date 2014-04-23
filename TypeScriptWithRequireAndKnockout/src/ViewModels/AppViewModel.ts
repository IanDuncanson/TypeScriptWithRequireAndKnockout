/// <reference path="../typings/require.d.ts" />
/// <reference path="../typings/knockout.d.ts" />
/// <reference path="../typings/knockout.es5.d.ts" />

import ko = require('knockout');

export class AppViewModel {

    title: KnockoutObservable<string> = ko.observable("My Sample");

    constructor() {

    }
}
