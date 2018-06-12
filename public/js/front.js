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
        
        
        //making inputs work...
        var zone = {
          // building name
          buildingName: $("input[name='buildingName']").val().trim(),
          // plant zones
          plant_zones: $("input[name='plantZone']").val().trim(),
          // utility 1
          utility1name: $("input[name='utility1name']").val().trim(),
          utility1capacity: $("input[name='utility1capacity']").val().trim(),
          utility1load: $("input[name='utility1load']").val().trim(),
          utility1percentutilization: $("input[name='utility1percentutilization']").val().trim(),
          // utility 2
          utility2name: $("input[name='utility2name']").val().trim(),
          utility2capacity: $("input[name='utility2capacity']").val().trim(),
          utility2load: $("input[name='utility2load']").val().trim(),
          utility2percentutilization: $("input[name='utility2percentutilization']").val().trim(),
          // utility 3
          utility3name: $("input[name='utility3name']").val().trim(),
          utility3capacity: $("input[name='utility3capacity']").val().trim(),
          utility3load: $("input[name='utility3load']").val().trim(),
          utility3percentutilization: $("input[name='utility3percentutilization']").val().trim(),
          // utility 4
          utility4name: $("input[name='utility4name']").val().trim(),
          utility4capacity: $("input[name='utility4capacity']").val().trim(),
          utility4load: $("input[name='utility4load']").val().trim(),
          utility4percentutilization: $("input[name='utility4percentutilization']").val().trim(),
          // utility 5
          utility5name: $("input[name='utility5name']").val().trim(),
          utility5capacity: $("input[name='utility5capacity']").val().trim(),
          utility5load: $("input[name='utility5load']").val().trim(),
          utility5percentutilization: $("input[name='utility5percentutilization']").val().trim(),
          // utility 6
          utility6name: $("input[name='utility6name']").val().trim(),
          utility6capacity: $("input[name='utility6capacity']").val().trim(),
          utility6load: $("input[name='utility6load']").val().trim(),
          utility6percentutilization: $("input[name='utility6percentutilization']").val().trim(),
          // utility 7
          utility7name: $("input[name='utility7name']").val().trim(),
          utility7capacity: $("input[name='utility7capacity']").val().trim(),
          utility7load: $("input[name='utility7load']").val().trim(),
          utility7percentutilization: $("input[name='utility7percentutilization']").val().trim(),
        }

        $("input[name='buildingName']").val("");
        $("input[name='plantZone']").val("");
        // utility 1
        $("input[name='utility1name']").val("");
        $("input[name='utility1capacity']").val("");
        $("input[name='utility1load']").val("");
        $("input[name='utility1percentutilization']").val("");

        // utility 2
        $("input[name='utility2name']").val("");
        $("input[name='utility2capacity']").val("");
        $("input[name='utility2load']").val("");
        $("input[name='utility2percentutilization']").val("");

        // utility 3
        $("input[name='utility3name']").val("");
        $("input[name='utility3capacity']").val("");
        $("input[name='utility3load']").val("");
        $("input[name='utility3percentutilization']").val("");

        // utility 4
        $("input[name='utility4name']").val("");
        $("input[name='utility4capacity']").val("");
        $("input[name='utility4load']").val("");
        $("input[name='utility4percentutilization']").val("");

        // utility 5
        $("input[name='utility5name']").val("");
        $("input[name='utility5capacity']").val("");
        $("input[name='utility5load']").val("");
        $("input[name='utility5percentutilization']").val("");

        // utility 6
        $("input[name='utility6name']").val("");
        $("input[name='utility6capacity']").val("");
        $("input[name='utility6load']").val("");
        $("input[name='utility6percentutilization']").val("");

        // utility 7
        $("input[name='utility7name']").val("");
        $("input[name='utility7capacity']").val("");
        $("input[name='utility7load']").val("");
        $("input[name='utility7percentutilization']").val("");

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

      var chart1data ={
        labels: utilityNames,
        datasets: [{
          label: 'utility percent',
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
            text: 'This is ' + zoneNames[0] + ' ' + buildingNames[0] 
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

const chartTwo = document.getElementById('chartTwo');
// console.log(chartTwo);

let barChartTwo = new Chart(chartTwo, {
  type: 'bar',
  data: {
    labels: ['label1', 'label2', 'label3'],
    datasets: [{
      label: "test chart",
      // Actual data goes below, this will be pulled from mySQL
      data:[12,20,5],
      backgroundColor: ['blue','red','green']
    }]
  },
  options:{
    title:{
      display: true,
      text: 'This is the name of the chart'
    },
    tooltips:{
      // popups when you hover over chart
      enabled:true
    }
  }
});

// console.log(app);