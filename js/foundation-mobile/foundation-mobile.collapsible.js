/*jslint unparam: true, browser: true, indent: 2 */

;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.collapsible = {
    name : 'collapsible',

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
        $('[data-collapsible]').each(function() {
          var $collapsible = $(this);

          if($collapsible.is('[data-collapsed]')) {
            self.collapse($collapsible);
          }
        });

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
        .off('.fndtn.collapsible')
        .on('click.fndtn.collapsible', '[data-collapsible]', function (e) {
          var element = $(this).closest('[data-collapsible]');
          if (element.hasClass('collapsed')) {
            self.uncollapse(element);
          } else {
            self.collapse(element);
          }
          e.preventDefault();
        });

      return true;
    },

    collapse: function(element) {
      var self = this;
      element.addClass('collapsed');
      element.children().not(':first-child').hide();
    },

    uncollapse: function(element) {
      var self = this;
      element.children().show();
      element.removeClass('collapsed');
    },

    reflow : function () {}
  };
}(Foundation.zj, this, this.document));
