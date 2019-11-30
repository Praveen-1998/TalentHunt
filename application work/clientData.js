Highcharts.chart('container', {
    chart: {
        type: 'column'
    },
    title: {
        text: 'Clients Information'
    },
    xAxis: {
        type: 'category',
        labels: {
            rotation: -45,
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    },
    yAxis: {
        min: 0,
        title: {
            text: 'Number of Employees'
        }
    },
    legend: {
        enabled: false
    },
    tooltip: {
        pointFormat: 'Total no of Employees: <b>{point.y}</b>'
    },
    series: [{
        name: 'Population',
        data: [
            {name:'Robert Bosch', y:24,
       events:{ click:function(){
            window.location.href="./table.html"
        }}},
        {name:'Traveloka', y:20,
        events:{ click:function(){
             window.location.href="./table.html"
         }}},
         {name:'Synchrona', y:14,
         events:{ click:function(){
              window.location.href="./table.html"
          }}},
          {name:'Wipro', y:18,
       events:{ click:function(){
            window.location.href="./table.html"
        }}},
        {name:'Capgemini', y:22,
       events:{ click:function(){
            window.location.href="./table.html"
        }}},
        {name:'TCS', y:12,
       events:{ click:function(){
            window.location.href="./table.html"
        }}}
        ],
        dataLabels: {
            enabled: true,
            rotation: -90,
            color: '#FFFFFF',
            align: 'right',
            format: '{point.y:.1f}', // one decimal
            y: 10, // 10 pixels down from the top
            style: {
                fontSize: '13px',
                fontFamily: 'Verdana, sans-serif'
            }
        }
    }]
});