/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.back = {
    name : 'back',

    version : '4.1.5',

    settings : {
      init : false
    },

    init : function (scope, method, options) {
      var self = this;
      this.scope = scope || this.scope;

      if (typeof method === 'object') {
        $.extend(true, this.settings, method);
      } else if (typeof options !== 'undefined') {
        $.extend(true, this.settings, options);
      }

      if (typeof method !== 'string') {
        self.events();

        return this.settings.init;
      } else {
        // fire method
        return this[method].call(this, options);
      }
    },

    events : function () {
      var self = this;

      $(this.scope)
        .off('.fndtn.back')
        .on('click.fndtn.back', '[data-back]', function (e) {
          window.history.go(-1);
          e.preventDefault();
        });

      return true;
    },

    reflow : function () {}
  };
}(Foundation.zj, this, this.document));
