//     Jslib.js 0.0.0
//     http://tgriesser.com/jslib
//     (c) 2013 Tim Griesser
//     Jslib may be freely distributed under the MIT license.
(function(JslibFactory) {

  if (typeof exports === 'object') {
    module.exports = JslibFactory(require('underscore'));
  } else if (typeof define === "function" && define.amd) {
    define(['underscore'], function(_) {
      return JslibFactory(_);
    });
  } else {
    var root = this;
    var lastJslib = root.Jslib;
    var Jslib     = root.Jslib = JslibFactory(root._);
    Jslib.noConflict = function() {
      root.Jslib = lastJslib;
      return Jslib;
    };
  }

}).call(this, (function(_) {

  "use strict";

  var Jslib = function() {};

  Jslib.VERSION = '0.0.0';

  return Jslib;

}));