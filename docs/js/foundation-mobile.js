/*
 * Foundation Mobile Library
 * http://opensource.alfajango.com/foundation-mobile
 * Copyright 2013, Alfa Jango
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.dropdown.resize = function () {
      var dropdown = $('[data-dropdown-content].open'),
          target = $("[data-dropdown='" + dropdown.attr('id') + "']");

      if (dropdown.length && target.length) {
        this.css(dropdown, target);
        this.mobile_css(dropdown, target);
      }
  };

  Foundation.libs.dropdown.mobile_css = function(dropdown, target) {
      var $window = $(window);

      // If bottom of dropdown is above bottom of window
      if ((target.position().top + target.outerHeight()) < ($window.scrollTop() + $window.height())) {
          target.height($window.height() - (target.offset().top - $window.scrollTop()) - 10)
      }
  };

}(Foundation.zj, this, this.document));
