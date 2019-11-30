// Create the chart
Highcharts.chart('container', {
    chart: {
        type: 'pie'
    },
    title: {
        text: 'Non-Billable Technology Wised Paid and Un-paid Engineers Strength'
    },
    subtitle: {
        // text: 'Based On experience'
    },
    accessibility: {
        announceNewData: {
            enabled: true
        }
    },
    xAxis: {
        type: 'category'
    },
    yAxis: {
        title: {
            text: 'Total Percentage Of Employees Deployed'
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
                format: '{point.y:.1f}'
            }
        }
    },

    tooltip: {
        headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
        pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
    },

    series: [
        {
            name: "Technology",
            colorByPoint: true,
            data: [
                {
                    name: "Javafullstack",
                    y: 62.74,
                    drilldown: "Javafullstack"
                },
                {
                    name: "Firefox",
                    y: 10.57,
                    drilldown: "Firefox"
                },
                {
                    name: "Internet Explorer",
                    y: 7.23,
                    drilldown: "Internet Explorer"
                },
                {
                    name: "Safari",
                    y: 5.58,
                    drilldown: "Safari"
                },
                {
                    name: "Edge",
                    y: 4.02,
                    drilldown: "Edge"
                },
                {
                    name: "Opera",
                    y: 1.92,
                    drilldown: "Opera"
                },
                {
                    name: "Other",
                    y: 7.62,
                    drilldown: null
                }
            ]
        }
    ],
    drilldown: {
        series: [
            {
                name: "Javafullstack",
                id: "Javafullstack",
                data: [
                    [
                        "0-1",
                        0.1
                    ],
                    [
                        "1-2",
                        1.3
                    ],
                    [
                        "2-3",
                        53.02
                    ],
                    [
                        "3-4",
                        1.4
                    ],
                    [
                        "4-6",
                        0.88
                    ],
                    [
                        "6-7",
                        0.56
                    ]
                ]
            },
            {
                name: "Firefox",
                id: "Firefox",
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
                name: "Internet Explorer",
                id: "Internet Explorer",
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
                name: "Safari",
                id: "Safari",
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
            },
            {
                name: "Edge",
                id: "Edge",
                data: [
                    [
                        "v16",
                        2.6
                    ],
                    [
                        "v15",
                        0.92
                    ],
                    [
                        "v14",
                        0.4
                    ],
                    [
                        "v13",
                        0.1
                    ]
                ]
            },
            {
                name: "Opera",
                id: "Opera",
                data: [
                    [
                        "v50.0",
                        0.96
                    ],
                    [
                        "v49.0",
                        0.82
                    ],
                    [
                        "v12.1",
                        0.14
                    ]
                ]
            }
        ]
    }
});