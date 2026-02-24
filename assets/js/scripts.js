(($) => {
  $(document).ready(() => {

    // feature toggle
    $(document).on('click', '.mmsi-feature .mmsi-feature__media', function () {
      if (window.innerWidth < 600) return;
      $(this).closest('.mmsi-feature').toggleClass('is-collapsed');
    });

    // floating label
    function updateFieldState(input) {
      const $field = $(input).closest('.nf-field');
      if ($(input).val().trim() !== '') {
        $field.addClass('has-value');
      } else {
        $field.removeClass('has-value');
      }
    }
    // On typing
    $(document).on('input', '.nf-field-element input, .nf-field-element textarea', function () {
      updateFieldState(this);
    });

  });
})(jQuery);