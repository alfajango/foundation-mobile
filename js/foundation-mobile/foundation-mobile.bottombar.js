/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.bottombar = {
    name : 'bottombar',

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

        $('.bottom-bar, [data-bottombar]').each(function () {
          $.extend(true, self.settings, self.data_options($(this)));
          self.settings.$w = $(window);
          self.settings.$bottombar = $(this);

          if (self.settings.$bottombar.parent().hasClass('fixed-bottom')) {
            var paddingBottom = self.outerHeight(self.settings.$bottombar);
            paddingBottom += parseInt(self.settings.$bottombar.css('margin-top'));
            $('body').css('padding-bottom', paddingBottom);
          }
        });

        return this.settings.init;
      } else {
        // fire method
        return this[method].call(this, options);
      }
    },

    height : function (ul) {
      var total = 0,
          self = this;

      ul.find('> li').each(function () { total += self.outerHeight($(this), true); });

      return total;
    },

    reflow : function () {}
  };
}(Foundation.zj, this, this.document));
