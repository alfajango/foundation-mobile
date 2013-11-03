;(function ($, window, document, undefined) {
  'use strict';

  var $window = $(window);

  var sizeModal = function(modal) {
    modal.css('width', ($window.width() - 30) + 'px');
    modal.css('height', ($window.height() - 30) + 'px');
  };

  var positionClose = function(modal, close, clone) {
    if (clone.length) {
    var // Foundation's CSS rules position the close element in em, get px
        relativePxOffset = Number(getComputedStyle(close.get(0), "").fontSize.match(/(\d*(\.\d*)?)px/)[1]),
        // Position it 15px below the window scrollTop in addition to its modal-relative offset.
        top = relativePxOffset * 0.5 + 15 + $window.scrollTop(),
        // Position it 15px to the left of the window's left edge in addition to its modal-relative offset.
        right = relativePxOffset * 0.6875 + 15;

    clone.css({'top': top, 'right': right, 'z-index': 9999, 'position': 'absolute'})
    }
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
