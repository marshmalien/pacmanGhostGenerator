(function($) {
  var allGhosts = [];
  var storage = {
    set: function() {
      localStorage.setItem('ghosts', JSON.stringify(allGhosts));
    },
    get: function() {
      var ghosts = localStorage.ghosts === undefined ? false : JSON.parse(localStorage.ghosts);
      return ghosts;
    },
    clear: function() {
      localStorage.removeItem('ghosts');
    }
  }


  // prototype has access to context inside of constructo
  // prototype can see inside of Constructor
  Ghost.prototype.buildGhost = function() {
      var source = $('#ghost').html(),
        template = Handlebars.compile(source),
        context = this.info,
        html = template(context)

      $(html).prependTo('.main-content').fadeIn();

      return $('.ghost').first();
    }
    /* Ghost Constructor */
  function Ghost(context) {
    // every ghost will have a context for it's self
    this.info = (context);
    this.info.self = this.buildGhost();
    console.log(this.info);

    allGhosts.push(this);
    // grab the latest storage of allGhosts array
    storage.set();
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

  /* Local Storage Check */
  if (storage.get()) {
    var ghosts = storage.get();
    $('.empty-container').remove();
    for (var index = 0; index < ghosts.length; index++) {
      new Ghost(ghosts[index].info)
    }
  }

  /* Event Listeners */
  $('form').on('submit', function(event) {
    event.preventDefault();
    new Ghost(formValues());
    $(this).trigger('reset');

    if ($('.empty-container').length) {
      console.log('truthy');
      $('.empty-container').remove();
    }
  });

})(jQuery);
