// Generated by BUCKLESCRIPT VERSION 2.1.0, PLEASE EDIT WITH CARE
'use strict';

var Jest        = require("@glennsl/bs-jest/lib/js/src/jest.js");
var Curry       = require("bs-platform/lib/js/curry.js");
var Js_json     = require("bs-platform/lib/js/js_json.js");
var LocalForage = require("../src/LocalForage.js");

function then_(prim, prim$1) {
  return prim$1.then(Curry.__1(prim));
}

function thenWrap(a, prom) {
  return prom.then((function (x) {
                return Promise.resolve(Curry._1(a, x));
              }));
}

describe("LocalForage", (function () {
        return Jest.testPromise("can save and recover an item", (function () {
                      var prim = LocalForage.setItem("test", 212.0);
                      return thenWrap((function (num) {
                                    var asInt = Js_json.decodeNumber(num);
                                    return Jest.Expect[/* toBe */2](/* Some */[212.0], Jest.Expect[/* expect */0](asInt));
                                  }), prim.then((function () {
                                        return LocalForage.getItem("test");
                                      })));
                    }));
      }));

exports.then_    = then_;
exports.thenWrap = thenWrap;
/*  Not a pure module */
