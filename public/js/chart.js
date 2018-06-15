

// New code for pulling data for chart.js
// Could be broken into a different js file, maybe app.js
$(document).ready(function(){
  $.ajax({
    url: "https://scale-up2018.herokuapp.com/api/data",
    method: "GET",
    dataType: 'json',
    success: function(data){
      console.log(data);
      var buildingNames = [];
      var zoneNames = [];
      var utilityNames = [];

      for(var i in data.Buildings) {
        buildingNames.push(data.Buildings[i].building_name);
        zoneNames.push(data.Zones[i].plant_zones);
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
        data.Utilities["0"].utility4name
      ]
      console.log(utilityNames);

      utilityPercent=[
        data.Utilities["0"].percent_utilizations1,
        data.Utilities["0"].percent_utilizations2,
        data.Utilities["0"].percent_utilizations3,
        data.Utilities["0"].percent_utilizations4
      ]
      console.log(utilityPercent);



      var chart1data ={
        labels: utilityNames,
        datasets: [{
          label: 'Percent Used first row',
          backgroundColor: 'rgba(60, 80, 235, 0.8)',
          data: utilityPercent
        }],
      };

      // Actual chart creation
      const chartOne = document.getElementById('chartOne');
      Chart.defaults.global.defaultFontFamily = 'lato';
      Chart.defaults.global.defaultFontSize = 17;
      Chart.defaults.global.defaultFontColor = 'black';
      
      var barChartOne = new Chart(chartOne, {
        type: 'bar',
        data: chart1data,
        options:{
          scales:{
            yAxes:[{
              ticks:{
                suggestedMin:0,
                suggestedMax: 100
              }
            }]
          },
          title:{
            display: true,
            text: 'This is ' + buildingNames[0] + ' ' + zoneNames[0] 
          }},
      });



// chart 2
utilityNames=[
  data.Utilities["1"].utility1name,
  data.Utilities["1"].utility2name,
  data.Utilities["1"].utility3name,
  data.Utilities["1"].utility4name
]
//console.log(utilityNames);

utilityPercent=[
  data.Utilities["1"].percent_utilizations1,
  data.Utilities["1"].percent_utilizations2,
  data.Utilities["1"].percent_utilizations3,
  data.Utilities["1"].percent_utilizations4
]
//console.log(utilityPercent);



var chart2data ={
  labels: utilityNames,
  datasets: [{
    label: 'Percent Used second row',
    backgroundColor: 'rgba(60, 100, 200, 0.8)',
    data: utilityPercent
  }],
};

// Actual chart creation
const chartTwo = document.getElementById('chartTwo');

var barChartTwo = new Chart(chartTwo, {
  type: 'bar',
  data: chart2data,
  options:{
    scales:{
      yAxes:[{
        ticks:{
          suggestedMin:0,
          suggestedMax: 100
        }
      }]
    },
    title:{
      display: true,
      text: 'This is ' + buildingNames[1] + ' ' + zoneNames[1] 
    }},
});


    },
    error: function(data) {
      console.log(data);
    }

  })
})

