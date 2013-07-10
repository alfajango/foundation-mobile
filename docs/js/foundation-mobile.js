/*
 * Foundation Mobile Library
 * http://opensource.alfajango.com/foundation-mobile
 * Copyright 2013, Alfa Jango
 * Free to use under the MIT license.
 * http://www.opensource.org/licenses/mit-license.php
*/

// Don't really need anything in here yet, since we're building off of Foundation,
// and the nice folks at Zurb have done all the heavy lifting already.
;
/*jslint unparam: true, browser: true, indent: 2 */


;(function ($, window, document, undefined) {
  'use strict';

  Foundation.libs.bottombar = {
    name : 'bottombar',

    version : '4.2.3',

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
;(function ($, window, document, undefined) {
  'use strict';

  var $window = $(window);

  var sizeModal = function(modal) {
    modal.width($window.width() - 30);
    modal.height($window.height() - 30);
  };

  var positionClose = function(modal, close, clone) {
    var // Foundation's CSS rules position the close element in em, get px
        relativePxOffset = Number(getComputedStyle(close.get(0), "").fontSize.match(/(\d*(\.\d*)?)px/)[1]),
        // Position it 15px below the window scrollTop in addition to its modal-relative offset.
        top = relativePxOffset * 0.5 + 15 + $window.scrollTop(),
        // Position it 15px to the left of the window's left edge in addition to its modal-relative offset.
        right = relativePxOffset * 0.6875 + 15;

    clone.css({'top': top, 'right': right, 'z-index': 9999, 'position': 'absolute'})
  };

  $(document)
    .delegate('.reveal-modal.full-screen', 'open', function() {
      var modal = $(this),
          $body = $('body');

      sizeModal(modal);

      $body
        .data('css-height', $body.css('height'))
        .data('css-overflow', $body.css('overflow'))
        .css({'overflow': 'hidden', 'height': '100%'});
    })

    // Since we're making the modal window itself scroll, we don't want to keep
    // the close element absolutely positioned relative to the screen so the user
    // doesn't have to scroll back up to close the modal.
    //
    // We need to compute the top offset of the close button so properly to position it
    // such that it's independent of the modal scroll position and relative to the
    // window scroll position.
    .delegate('.reveal-modal.full-screen', 'opened', function() {
      var modal = $(this),
          close = modal.find('.close-reveal-modal'),
          clone = $('.full-screen-close[data-close="' + modal.attr('id') + '"]'),
          clone = close.clone();

      clone
        .attr('data-close', modal.attr('id'))
        .addClass('full-screen-close')
        .click(function(e) { close.click(); e.preventDefault(); });

      positionClose(modal, close, clone);
      clone.appendTo('body');

      close.hide();
    })

    .delegate('.reveal-modal.full-screen', 'closed', function() {
      var modal = $(this),
          $body = $('body');
      modal.find('.close-reveal-modal').show();
      $('.full-screen-close[data-close="' + modal.attr('id') + '"]').remove();
      $body.css({'height': $body.data('css-height'), 'overflow': $body.data('css-overflow')});
    });

  $window.resize(function() {
    var modal = $('.reveal-modal.open');
    if (modal.length) {
      var close = modal.find('.close-reveal-modal'),
          clone = $('.full-screen-close[data-close="' + modal.attr('id') + '"]');
      sizeModal(modal);
      modal.css('top', $window.scrollTop() + 15);
      positionClose(modal, close, clone);
    }
  });

}(Foundation.zj, this, this.document));
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
/*




*/

;
