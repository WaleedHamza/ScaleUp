// New code for pulling data for chart.js
// Could be broken into a different js file, maybe app.js
$(document).ready(function(){
  $.ajax({
    url: "https://scale-up20182.herokuapp.com/api/data",
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
      }
      console.log(buildingNames);
      console.log(zoneNames);

      
      utilityNames=[
        data.Utilities["0"].utility1name,
        data.Utilities["0"].utility2name,
        data.Utilities["0"].utility3name,
        data.Utilities["0"].utility4name
      ]
      console.log(utilityNames);

      utilityPercent1=[
        data.Utilities["0"].percent_utilizations1,
        data.Utilities["0"].percent_utilizations2,
        data.Utilities["0"].percent_utilizations3,
        data.Utilities["0"].percent_utilizations4
      ]

      utilityPercent2=[
        data.Utilities["1"].percent_utilizations1,
        data.Utilities["1"].percent_utilizations2,
        data.Utilities["1"].percent_utilizations3,
        data.Utilities["1"].percent_utilizations4
      ]

      utilityPercent3=[
        data.Utilities["2"].percent_utilizations1,
        data.Utilities["2"].percent_utilizations2,
        data.Utilities["2"].percent_utilizations3,
        data.Utilities["2"].percent_utilizations4
      ]


      var chart1data ={
        labels: utilityNames,
        datasets: [{
          label: 'Zone 1',
          backgroundColor: 'rgba(60, 80, 235, 0.8)',
          data: utilityPercent1
          },{
            label: 'Zone 2',
            backgroundColor: 'rgba(40, 100, 235, 0.8)',
            data: utilityPercent2
          },{
              label: 'Zone 3',
              backgroundColor: 'rgba(20, 120, 235, 0.8)',
              data: utilityPercent3
        }],
      };

      // Actual chart creation
      const chartOne = document.getElementById('chartOne');
      Chart.defaults.global.defaultFontFamily = 'lato';
      Chart.defaults.global.defaultFontSize = 16;
      Chart.defaults.global.defaultFontColor = 'white';
      
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
            text: 'This is ' + buildingNames[0] 
          }},
      });


      utilityPercent4=[
        data.Utilities["3"].percent_utilizations1,
        data.Utilities["3"].percent_utilizations2,
        data.Utilities["3"].percent_utilizations3,
        data.Utilities["3"].percent_utilizations4
      ]

      utilityPercent5=[
        data.Utilities["4"].percent_utilizations1,
        data.Utilities["4"].percent_utilizations2,
        data.Utilities["4"].percent_utilizations3,
        data.Utilities["4"].percent_utilizations4
      ]

      utilityPercent6=[
        data.Utilities["5"].percent_utilizations1,
        data.Utilities["5"].percent_utilizations2,
        data.Utilities["5"].percent_utilizations3,
        data.Utilities["5"].percent_utilizations4
      ]

var chart2data ={
  labels: utilityNames,
  datasets: [{
    label: 'Zone 1',
    backgroundColor: 'rgba(60, 80, 235, 0.8)',
    data: utilityPercent4
    },{
      label: 'Zone 2',
      backgroundColor: 'rgba(40, 100, 235, 0.8)',
      data: utilityPercent5
    },{
        label: 'Zone 3',
        backgroundColor: 'rgba(20, 120, 235, 0.8)',
        data: utilityPercent6
  }],
};

// Actual chart2 creation
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
      text: 'This is ' + buildingNames[4] 
    }},
});


    },
    error: function(data) {
      console.log(data);
    }

  })
})
