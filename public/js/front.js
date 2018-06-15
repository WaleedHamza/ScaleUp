// from view.js example in classwork 8 squelize CRUD  
$(document).ready(function () {
  //Materialize Select 
  $('select').material_select();

  $('.grid').isotope({
    // options
    itemSelector: '.grid-item',
    layoutMode: 'fitRows'
  });

  $(document).on("submit", "#form", insertZone);
});

$('#addDataBtn').on('click', function () {
  insertZone();
  console.log(' i have been clicked', zone);
  // $("#building option:first").prop('disabled', true);
  // $("#building option:first").attr('selected', true);
  // $('select').material_select();
});

function insertZone() {

  //making inputs work...
  var zone = {
    // building name
    buildingName: $("#building").val().trim(),
    // plant zones
    plant_zones: $("#zone").val().trim(),
    // ELectricity 
    utility1capacity: $("#electricCap").val().trim(),
    utility1load: $("#electricUsed").val().trim(),
    // Water
    utility2capacity: $("#waterCap").val().trim(),
    utility2load: $("#waterUsed").val().trim(),
    //HVAC
    utility3capacity: $("#hvacCap").val().trim(),
    utility3load: $("#hvacUsed").val().trim(),
    // Steam
    utility4capacity: $("#steamCap").val().trim(),
    utility4load: $("#steamUsed").val().trim(),
  }

  console.log('this is the zone var front.js', zone);

  //clear inputs
  // $("#building").empty();
  $("#building").val("");
  // $("#zone").empty();
  $("#zone").val("");
  $("#electricUsed").val("");
  $("#electricCap").val("");
  $("#waterUsed").val("");
  $("#waterCap").val("");
  $("#hvacUsed").val("");
  $("#hvacCap").val("");
  $("#steamUsed").val("");
  $("#steamCap").val("");


  $.post("/api/data", zone).done(function (data) {
    console.log(data);
  });
}
