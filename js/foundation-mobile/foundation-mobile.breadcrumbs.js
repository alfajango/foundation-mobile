/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.breadcrumbs = {
    name : 'breadcrumbs',

    version : '4.1.5',

    settings : {
      init : false
    },

    init : function (section, method, options) {
      Foundation.inherit(this, 'data_options');
      var self = this;

      if (typeof method === 'object') {
        $.extend(true, this.settings, method);
      } else if (typeof options !== 'undefined') {
        $.extend(true, this.settings, options);
      }

      if (typeof method !== 'string') {
        // Breadcrumbs init code here

        this.events();

        return this.settings.init;
      } else {
        // fire method
        return this[method].call(this, options);
      }
    },

    events : function () {
      var self = this;

      $(this.scope)
        .off('.fndtn.breadcrumbs')
        .on('click.fndtn.breadcrumbs', '.mobile-breadcrumbs', function (e) {
          e.preventDefault();

          var element = $(this);
        });

      return true;
    },

    reflow : function () {}
  };
}(Foundation.zj, this, this.document));
