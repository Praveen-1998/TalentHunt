window.onload = function () {

    var totalFullStack = 100;
    var visitorsData = {
        "Deployed vs Trained vs On bench": [{
            click: visitorsChartDrilldownHandler,
            cursor: "pointer",
            explodeOnClick: false,
            innerRadius: "75%",
            legendMarkerType: "square",
            name: "Mentor Info",
            radius: "100%",
            showInLegend: true,
            startAngle: 90,
            type: "pie",
            dataPoints: [
                { y: 36, name: "JAVAFULLSTACK", color: "Green" },
                { y: 29, name: "MEANSTACK", color: "Blue" },
                { y: 35, name: "DATA SCIENCE", color: "Red" }
            ]
        }],
        "JAVAFULLSTACK": [{
            
            color: "Green",
            name: "JAVAFULLSTACK",
            type: "column",
            dataPoints: [
                { x: new Date("1 Sep 2015"), y: 10,
                click:function(){
                    window.location.href="./table1.html"
                   
                } },
                { x: new Date("1 Oct 2015"), y: 5,
                click:function(){
                    window.location.href="./table1.html"
                   
                } },
                { x: new Date("1 Nov 2015"), y: 15,
                click:function(){
                    window.location.href="./table1.html"
                   
                }
             },
                { x: new Date("1 Dec 2015"), y: 6,
                click:function(){
                    window.location.href="./table1.html"
                   
                } },
            ],
        }],
        "MEANSTACK": [{
            color: "Blue",
            name: "MEANSTACK",
            type: "column",
            dataPoints: [
                { x: new Date("1 Sep 2015"), y: 12,
                click:function(){
                    window.location.href="./table1.html"
                   
                } },
                { x: new Date("1 Oct 2015"), y: 5 ,
                click:function(){
                    window.location.href="./table1.html"
                   
                }},
                { x: new Date("1 Nov 2015"), y: 8 ,
                click:function(){
                    window.location.href="./table1.html"
                   
                }},
                { x: new Date("1 Dec 2015"), y: 4,
                click:function(){
                    window.location.href="./table1.html"
                   
                } }
            ]
        }],
        "DATA SCIENCE": [{
            color: "Red",
            name: "DATA SCIENCE",
            type: "column",
            dataPoints: [
                { x: new Date("1 Sep 2015"), y: 10 ,
                click:function(){
                    window.location.href="./table1.html"
                   
                }},
                { x: new Date("1 Oct 2015"), y: 12 ,
                click:function(){
                    window.location.href="./table1.html"
                   
                }},
                { x: new Date("1 Nov 2015"), y: 8,
                click:function(){
                    window.location.href="./table1.html"
                   
                } },
                { x: new Date("1 Dec 2015"), y: 5,
                click:function(){
                    window.location.href="./table1.html"
                   
                } }
            ]
        }]
    };
    
    var newVSReturningVisitorsOptions = {
        animationEnabled: true,
        theme: "light2",
        title: {
            text: "MENTOR INFO",
            fontSize:20
        },
        subtitles: [{
        
            backgroundColor: "#2eacd1",
            fontSize: 16,
            fontColor: "white",
            padding: 5
        }],
        legend: {
            fontFamily: "calibri",
            fontSize: 14,
            itemTextFormatter: function (e) {
                return e.dataPoint.name + ": " + Math.round(e.dataPoint.y / totalFullStack * 100) + "%";  
            }
        },
        data: []
    };
    
    var visitorsDrilldownedChartOptions = {
        animationEnabled: true,
        theme: "light2",
        axisX: {
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2"
        },
        axisY: {
            gridThickness: 0,
            includeZero: false,
            labelFontColor: "#717171",
            lineColor: "#a2a2a2",
            tickColor: "#a2a2a2",
            lineThickness: 1
        },
        data: []
    };
    
    var chart = new CanvasJS.Chart("chartContainer", newVSReturningVisitorsOptions);
    chart.options.data = visitorsData["Deployed vs Trained vs On bench"];
    chart.render();
    
    function visitorsChartDrilldownHandler(e) {
        chart = new CanvasJS.Chart("chartContainer", visitorsDrilldownedChartOptions);
        chart.options.data = visitorsData[e.dataPoint.name];
        chart.options.title = { text: e.dataPoint.name }
        chart.render();
        $("#backButton").toggleClass("invisible");
    }

  

    
    $("#backButton").click(function() { 
        $(this).toggleClass("invisible");
        chart = new CanvasJS.Chart("chartContainer", newVSReturningVisitorsOptions);
        chart.options.data = visitorsData["Deployed vs Trained vs On bench"];
        chart.render();
    });
    
    }