
Highcharts.chart('container', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Engineers Team'
  },
  xAxis: {
    type: 'category'
  },
  yAxis: {
    title: {
      text: 'Total number of employees'
    }
  },
  legend: {
    enabled: false
  },
  plotOptions: {
    series: {
      borderWidth: 0,
      dataLabels: {
        enabled: true,
        format: '{point.name}'
      }
    }
  },

  tooltip: {
    // headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [
    {

      colorByPoint: true,
      data: [
        {
          name: "Billable",
          y: 55,
          color : "#74b9ff",
            events: {
              click: function () {
                window.location.href = "./graph.html"
              }
            }
        },
        {
          name: "Non Billable",
          y: 45,
          color: "#a29bfe",
          events: {
            click: function () {
              window.location.href = "./dashboard.html"
            }
          },
          drilldown: "Non Billable"
        },
      ]
    }
  ],
  drilldown: {
    series: [
      {
        name: "Robert bosch",
        id: "Robert bosch",
        type: "pie",
        data: [
          {
            name: "Based on Skills",
            y: 6,
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          },
          {
            name: "Based on Experience",
            y: 3,
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          }
        ]
      },
      {
        name: "Wipro",
        id: "Wipro",
        type: "pie",
        data: [
          {
            name: "Based on Skills",
            y: 4,
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          },
          {
            name: "Based on Experience",
            y: 9,
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          }
        ]
      },
      {
        name: "Capgemini",
        id: "Capgemini",
        type: "pie",
        data: [
          {
            name: "Based on Skills",
            y: 4,
            color: "red",
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          },
          {
            name: "Based on Experience",
            y: 2,
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          }
        ]
      },
      {
        name: "HP",
        id: "HP",
        type: "pie",
        data: [
          {
            name: "Based on Skills",
            y: 4,
            color: "red",
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          },
          {
            name: "Based on Experience",
            y: 2,
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          }
        ]
      },
      {
        name: "Tech Mahindra",
        id: "Tech Mahindra",
        type: "pie",
        data: [
          {
            name: "Based on Skills",
            y: 4,
            color: "red",
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          },
          {
            name: "Based on Experience",
            y: 2,
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          }
        ]
      },
      {
        name: "TCS",
        id: "TCS",
        type: "pie",
        data: [
          {
            name: "Based on Skills",
            y: 4,
            color: "red",
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          },
          {
            name: "Based on Experience",
            y: 2,
            events: {
              click: function () {
                window.location.href = "./table.html"
              }
            }
          }
        ]
      },
      
    ]
  }
});