/*
 * Foundation Mobile Library
 * http://opensource.alfajango.com/foundation-mobile
 * Copyright 2013, Alfa Jango
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.dropdown.full_size = function(dropdown) {
      var $window = $(window);

      // If bottom of dropdown is above bottom of window
      if (dropdown.hasClass('full-size') && (dropdown.offset().top + dropdown.outerHeight()) < ($window.scrollTop() + $window.height())) {
          dropdown.height($window.height() - (dropdown.offset().top - $window.scrollTop()) - 10)
      }
  };

  Foundation.libs.dropdown.resize = function () {
      var dropdown = $('[data-dropdown-content].open'),
          target = $("[data-dropdown='" + dropdown.attr('id') + "']");

      if (dropdown.length && target.length) {
        this.css(dropdown, target);
        this.full_size(dropdown);
      }
  };

  $(document).foundation('dropdown', { opened: function(e) {
      var $window = $(window),
          dropdown = $(this);

      Foundation.libs.dropdown.full_size(dropdown);
  }});

}(Foundation.zj, this, this.document));
