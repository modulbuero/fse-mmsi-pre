(($) => {
  $(document).ready(() => {
    // Click on image area toggles collapse
    $(document).on('click', '.mmsi-feature .mmsi-feature__media', function () {
      $(this).closest('.mmsi-feature').toggleClass('is-collapsed');
    });
  });
})(jQuery);

