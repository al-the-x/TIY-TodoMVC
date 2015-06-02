(function(window){
  // Event Listeners!
  // Event Handlers!

  // In Vanilla JS:
  document.querySelector('some-element').addEventListener('some-event', doSomeStuff);

  // In jQuery:
  $('some-element').on('some-event', doSomeStuff);

  /**
   * Event Handler!
   *
   * @param {Event} event that fires
   */
  function doSomeStuff(event){
    // Do some stuff when `some-event` fires on `some-element`...
    // - CRUD the Model
    // - Update the View with data from the Model
  } // END doSomeStuff
})(window);
