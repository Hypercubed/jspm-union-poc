"use strict";

var jspm = require('jspm');
jspm.setPackagePath('.');

var builder = new jspm.Builder();

const paths = ["/appOverrideB/", "/appOverride/", "/app/"];

builder.bundle('main', 'dist/bundle.js', {
  mangle: false,
  fetch: function (load, fetch) {
    const baseUrl = this.baseURL;
    if (paths.length < 2 || load.address.indexOf(baseUrl) < 0) {
      return fetch(load);
    }

    const original = load.address;
    let testPaths = paths.slice();
    const basePath = testPaths.pop();

    const re = new RegExp(basePath + '$');
    testPaths = testPaths.map(function (d) {
      return baseUrl.replace(re, d);
    });

    return checkNext();

    function checkNext() {
      if (testPaths.length > 0) {
        load.address = original.replace(baseUrl, testPaths.shift());
        return fetch(load)
          .catch(function () {
            return checkNext();
          });
      }
      load.address = original;
      return fetch(load);
    }
  }
}).then(function () {
  console.log('build done');
}).catch(function (e) {
  console.log('build error', e);
});
