// Create the chart
Highcharts.chart('mentor', {
    chart: {
      type: 'pie'
    },
    title: {
      text: 'Mentors Details'
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
      //  headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
      pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b><br/>'
    },

    series: [
      {

        colorByPoint: true,
        data: [
          {
            name: "JavaFullStack",
            y: 62.74,
            color : "#fdcb6e",
            drilldown: "JavaFullStack"
          },
          {
            name: "MEANStack",
            y: 50.57,
            color : "#00b894",
            drilldown: "MEANStack"
          },
          {
            name: "DataScience",
            y: 47.23,
            drilldown: "DataScience"
          },
          {
            name: "Dotnet",
            y: 35.58,
            drilldown: "Dotnet"
          },
        ]

      }
    ],
    drilldown: {
      series: [
        {
          name: "JavaFullStack",
          id: "JavaFullStack",
          type:"bar",
          data: [
            {
              name:"vikas",
              y:6,
              events:{
                click:function(){
                    window.location.href="./mentortable.html"
                }
            }
            },
            {
              name:"Giridhar",
              y:4,
              events:{
                click:function(){
                    window.location.href="./mentortable.html"
                }
            }
            },
            {
              name:"RajaShekar",
              y:6,
              events:{
                click:function(){
                    window.location.href="./mentortable.html"
                }
            }
            },
            {
              name:"Chandan",
              y:4,
              events:{
                click:function(){
                    window.location.href="./mentortable.html"
                }
            }
            },
            {
              name:"Rohith",
              y:3,
              events:{
                click:function(){
                    window.location.href="./mentortable.html"
                }
            }
            },
            {
              name:"Praveen",
              y:7,
              events:{
                click:function(){
                    window.location.href="./mentortable.html"
                }
            }
            },
            {
              name:"Abhilash",
              y:2,
              events:{
                click:function(){
                    window.location.href="./mentortable.html"
                }
            }
            },
            {
              name:"Sudhanshu",
              y:9,
              events:{
                click:function(){
                    window.location.href="./mentortable.html"
                }
            }
            },
          ]
        },
        {
          name: "MEANStack",
          id: "MEANStack",
          type:"bar",
          data: [
            [
              "v58.0",
              1.02
            ],
            [
              "v57.0",
              7.36
            ],
            [
              "v56.0",
              0.35
            ],
            [
              "v55.0",
              0.11
            ],
            [
              "v54.0",
              0.1
            ],
            [
              "v52.0",
              0.95
            ],
            [
              "v51.0",
              0.15
            ],
            [
              "v50.0",
              0.1
            ],
            [
              "v48.0",
              0.31
            ],
            [
              "v47.0",
              0.12
            ]
          ]
        },
        {
          name: "DataScience",
          id: "DataScience",
          type:"bar",
          data: [
            [
              "v11.0",
              6.2
            ],
            [
              "v10.0",
              0.29
            ],
            [
              "v9.0",
              0.27
            ],
            [
              "v8.0",
              0.47
            ]
          ]
        },
        {
          name: "Dotnet",
          id: "Dotnet",
          type: "bar",
          data: [
            [
              "v11.0",
              3.39
            ],
            [
              "v10.1",
              0.96
            ],
            [
              "v10.0",
              0.36
            ],
            [
              "v9.1",
              0.54
            ],
            [
              "v9.0",
              0.13
            ],
            [
              "v5.1",
              0.2
            ]
          ]
        }
      ]
    }
  });

