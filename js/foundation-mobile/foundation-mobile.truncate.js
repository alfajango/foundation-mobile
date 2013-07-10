/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.truncate = {
    name : 'truncate',

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
        .off('.fndtn.truncate')
        .on('click.fndtn.truncate', '[data-truncate]', function (e) {
          e.preventDefault();

          var element = $(this),
              truncateCSS = {'white-space': 'nowrap', 'overflow': 'hidden', 'text-overflow': 'ellipsis'},
              expandCSS = {'white-space': 'normal', 'overflow': 'visible', 'text-overflow': 'clip'},
              truncated = element.css('text-overflow') == 'ellipsis';

          if (truncated) {
            element.css(expandCSS);
          } else {
            element.css(truncateCSS);
          }
        });

      return true;
    },

    reflow : function () {}
  };
}(Foundation.zj, this, this.document));
