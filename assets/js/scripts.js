(($) => {
  $(document).ready(() => {

    $(document).on('click', '.mmsi-feature .mmsi-feature__media', function () {
      if (window.innerWidth < 600) return;

      $(this).closest('.mmsi-feature').toggleClass('is-collapsed');
    });

  });
})(jQuery);


