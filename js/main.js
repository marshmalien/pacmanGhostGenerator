(function($) {
  /* Ghost Constructor */
  function Ghost() {
    console.log(this);
  }
  var ragnar = new Ghost();

  $('form').on('submit', function(event) {
    event.preventDefault();
    console.log('submit');
  });

})(jQuery);
