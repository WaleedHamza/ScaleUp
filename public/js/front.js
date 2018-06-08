$('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });



// from view.js example in classwork 8 squelize CRUD  
$(document).ready(function() {
  var $newItemInput = $("input.new-item");
  var $


  $(document).on("submit", "#form", insertZone);

  function insertZone(event) {
    event.preventDefault();
    var zone = {
      // example had one input field, so only one new ite. don't think this code is correct
      plant_zones: $newItemInput.val().trim(),
      capacity: $newItemInput.val().trim(),
      load_data: $newItemInput.val().trim(),
      percent_utilization: $newItemInput.val().trim()
      

    }
  }
});