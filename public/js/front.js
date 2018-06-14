// from view.js example in classwork 8 squelize CRUD  
$(document).ready(function () {

      $('.grid').isotope({
        // options
        itemSelector: '.grid-item',
        layoutMode: 'fitRows'
      });

      $(document).on("submit", "#form", insertZone);
      $('#addDataBtn').on('click', ()=>{
        insertZone();
        console.log(' i have been clicked', zone)
      });
  

      //Materialize Select 
      $(document).ready(function(){
        $('select').formSelect();
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

         console.log( 'this is the zone var front.js',  zone);

//clear inputs
        $("#building").empty();
        $("#zone").empty();
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
    });





// New code for pulling data for chart.js
// Could be broken into a different js file, maybe app.js
$(document).ready(function(){
  $.ajax({
    url: "http://localhost:8080/api/data",
    method: "GET",
    success: function(data){
      console.log(data);
      var buildingNames = [];
      var zoneNames = [];
      var utilityNames = [];

      for(var i in data.Buildings) {
        buildingNames.push(data.Buildings[i].building_name);
        zoneNames.push(data.Zones[i].plant_zones,"Test");
        // multiple utilities in single row, how are we looking to chart this data?
        // utilityNames.push(data[i].utility1name);
      }
      console.log(buildingNames);
      console.log(zoneNames);


      // These arrays are being generated but not used, will become Chart labels
      
      utilityNames=[
        data.Utilities["0"].utility1name,
        data.Utilities["0"].utility2name,
        data.Utilities["0"].utility3name,
        data.Utilities["0"].utility4name,
        data.Utilities["0"].utility5name,
        data.Utilities["0"].utility6name,
        data.Utilities["0"].utility7name
      ]
      console.log(utilityNames);

      utilityPercent=[
        data.Utilities["0"].percent_utilization1,
        data.Utilities["0"].percent_utilization2,
        data.Utilities["0"].percent_utilization3,
        data.Utilities["0"].percent_utilization4,
        data.Utilities["0"].percent_utilization5,
        data.Utilities["0"].percent_utilization6,
        data.Utilities["0"].percent_utilization7
      ]
      console.log(utilityPercent);

      utilityCapacity=[
        data.Utilities["0"].capacity1,
        data.Utilities["0"].capacity2,
        data.Utilities["0"].capacity3,
        data.Utilities["0"].capacity4,
        data.Utilities["0"].capacity5,
        data.Utilities["0"].capacity6,
        data.Utilities["0"].capacity7
      ]
      console.log(utilityCapacity);

      var chart1data ={
        labels: utilityNames,
        datasets: [{
          label: 'Capacity',
          backgroundColor: 'blue',
          data: utilityCapacity
        },{
          label: 'Percent Used',
          backgroundColor: 'red',
          data: utilityPercent
        }],
      };

      // Actual chart creation
      const chartOne = document.getElementById('chartOne');
      Chart.defaults.global.defaultFontFamily = 'lato';
      Chart.defaults.global.defaultFontSize = 18;
      Chart.defaults.global.defaultFontColor = '#777';
      
      var barChartOne = new Chart(chartOne, {
        type: 'bar',
        data: chart1data,
        options:{
          title:{
            display: true,
            text: 'This is ' + buildingNames[0] + ' ' + zoneNames[0] 
          }},
      });

    },
    error: function(data) {
      console.log(data);
    }

  })
})



// const chartOne = document.getElementById('chartOne');
// // console.log(chartOne);

// Chart.defaults.global.defaultFontFamily = 'lato';
// Chart.defaults.global.defaultFontSize = 18;
// Chart.defaults.global.defaultFontColor = '#777';

// let barChartOne = new Chart(chartOne, {
//   type: 'bar',
//   data: {
//     labels: ['label1', 'label2', 'label3'],
//     datasets: [{
//       label: "test chart",
//       // Actual data goes below, this will be pulled from mySQL
//       data:[12,20,5],
//       backgroundColor: ['blue','red','green']
//     }]
//   },
//   options:{
//     title:{
//       display: true,
//       text: 'This is the name of the chart'
//     },
//     tooltips:{
//       // popups when you hover over chart
//       enabled:true
//     }
//   }
// });

// const chartTwo = document.getElementById('chartTwo');
// // console.log(chartTwo);

// let barChartTwo = new Chart(chartTwo, {
//   type: 'bar',
//   data: {
//     labels: ['label1', 'label2', 'label3'],
//     datasets: [{
//       label: "test chart",
//       // Actual data goes below, this will be pulled from mySQL
//       data:[12,20,5],
//       backgroundColor: ['blue','red','green']
//     }]
//   },
//   options:{
//     title:{
//       display: true,
//       text: 'This is the name of the chart'
//     },
//     tooltips:{
//       // popups when you hover over chart
//       enabled:true
//     }
//   }
// });

// console.log(app);