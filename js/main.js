(function($) {
  /* Ghost Constructor */
  function Ghost() {
    console.log(this);
  }
  var ragnar = new Ghost();
  function formValues() {

  }

  $('form').on('submit', function(event) {
    event.preventDefault();

  });

})(jQuery);
