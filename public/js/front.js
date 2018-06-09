// from view.js example in classwork 8 squelize CRUD  
$(document).ready(function () {

      $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });

      $(document).on("submit", "#form", insertZone);

      function insertZone(event) {
        event.preventDefault();
        var zone = {
          // example had one input field, so only one new ite. don't think this code is correct
          plant_zones: $("input[name='plantZone']").val().trim(),
          capacity: $("input[name='capacity']").val().trim(),
          load_data: $("input[name='load']").val().trim(),
          percent_utilization: $("input[name='percent']").val().trim()
        }

        $("input[name='plantZone']").val("");
        $("input[name='capacity']").val("");
        $("input[name='load']").val("");
        $("input[name='percent']").val("");

        $.post("/api/data", zone).done(function (data) {
          console.log(data);
        });
      }
    });