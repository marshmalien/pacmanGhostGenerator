(function($) {
  // prototype has access to context inside of constructo
  // prototype can see inside of Constructor
  Ghost.prototype.buildGhost = function() {
    var source = $('#ghost').html(),
        template = Handlebars.compile(source),
        context = this.info,
        html = template(context)

        $(html).prependTo('.main-content').fadeIn();
  }
  /* Ghost Constructor */
  function Ghost(context) {
    // every ghost will have a context for it's self
    this.info = (context);
  }

  function formValues() {
    var context = {
      name: $('#ghost-name').val(),
      color: $('#ghost-color').val(),
      primary: $('#ghost-primary').val(),
      secondary: $('#ghost-secondary').val()
    };
    return context;
  }

  $('form').on('submit', function(event) {
    event.preventDefault();
    new Ghost(formValues()).buildGhost();
    $('.empty-container').remove();
  });

})(jQuery);
