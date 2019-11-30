var chart = Highcharts.chart('tech', {

    chart: {
        type: 'column'
    },

    title: {
        text: ''
    },

    // subtitle: {
    //     text: 'Resize the frame or click buttons to change appearance'
    // },

    legend: {
        align: 'right',
        verticalAlign: 'middle',
        layout: 'vertical'
    },

    xAxis: {
        categories: ['Java Full Stack', 'Mean Stack', 'Data Science'],
        labels: {
            x: -10
        }
    },

    yAxis: {
        allowDecimals: false,
        title: {
            text: 'Number of Engineers'
        }
    },

    series: [{
        name: 'Bench',
        data: [15, 10, 8],
        color : "Orange",
        events:{ click:function(){
            window.location.href="./table1.html"
        }
        }
    }, {
        name: 'Terminated',
        data: [3, 1, 2],
        color : "SlateBlue",
        events:{ click:function(){
            window.location.href="./table1.html"
        }
        }
    }, {
        name: 'Training',
        data: [16, 24, 9],
        color : "MediumSeaGreen",
        events:{ click:function(){
            window.location.href="./table1.html"
        }
        }
    }],

    responsive: {
        rules: [{
            condition: {
                maxWidth: 500
            },
            chartOptions: {
                legend: {
                    align: 'center',
                    verticalAlign: 'bottom',
                    layout: 'horizontal'
                },
                yAxis: {
                    labels: {
                        align: 'left',
                        x: 0,
                        y: -5
                    },
                    title: {
                        text: null
                    }
                },
                subtitle: {
                    text: null
                },
                credits: {
                    enabled: false
                }
            }
        }]
    }
});

// document.getElementById('small').addEventListener('click', function () {
//     chart.setSize(400);
// });

// document.getElementById('large').addEventListener('click', function () {
//     chart.setSize(600);
// });

// document.getElementById('auto').addEventListener('click', function () {
//     chart.setSize(null);
// });
