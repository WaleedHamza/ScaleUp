

// New code for pulling data for chart.js
// Could be broken into a different js file, maybe app.js
$(document).ready(function(){
  $.ajax({
    url: "'window.location.hostname'+'/api/data'",
    // url: "http://localhost:8080/api/data",
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
        data.Utilities["0"].utility4name
      ]
      console.log(utilityNames);

      utilityPercent=[
        data.Utilities["0"].percent_utilization1,
        data.Utilities["0"].percent_utilization2,
        data.Utilities["0"].percent_utilization3,
        data.Utilities["0"].percent_utilization4
      ]
      console.log(utilityPercent);

      utilityCapacity=[
        data.Utilities["0"].capacity1,
        data.Utilities["0"].capacity2,
        data.Utilities["0"].capacity3,
        data.Utilities["0"].capacity4
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




const chartOne = document.getElementById('chartOne');
// console.log(chartOne);

Chart.defaults.global.defaultFontFamily = 'lato';
Chart.defaults.global.defaultFontSize = 18;
Chart.defaults.global.defaultFontColor = '#777';

let barChartOne = new Chart(chartOne, {
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