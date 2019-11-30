am4core.ready(function() {

    // Themes begin
    am4core.useTheme(am4themes_animated);
    // Themes end
    
    var chart = am4core.create("chartdiv", am4charts.XYChart);
    chart.hiddenState.properties.opacity = 0; // this creates initial fade-in
    
    chart.data = [
      {
        country: "United States",
        visits: 725
      },
      {
        country: "United Kingdom",
        visits: 625
      },  
      {
        country: "China",
        visits: 602
      },
      {
        country: "Japan",
        visits: 509
      },
      {
        country: "Germany",
        visits: 322
      },
      {
        country: "France",
        visits: 214
      },
      {
        country: "India",
        visits: 204
      },
      {
        country: "Spain",
        visits: 198
      },
      {
        country: "Netherlands",
        visits: 165
      },
      {
        country: "Russia",
        visits: 130
      },
      {
        country: "South Korea",
        visits: 93
      },
      {
        country: "Canada",
        visits: 41
      }
    ];
    
    var categoryAxis = chart.xAxes.push(new am4charts.CategoryAxis());
    categoryAxis.renderer.grid.template.location = 0;
    categoryAxis.dataFields.category = "country";
    categoryAxis.renderer.minGridDistance = 40;
    categoryAxis.fontSize = 11;
    categoryAxis.renderer.labels.template.dy = 5;
    
    
    
    var image = new am4core.Image();
    image.horizontalCenter = "middle";
    image.width = 20;
    image.height = 20;
    image.verticalCenter = "middle";
    image.adapter.add("href", (href, target)=>{
      let category = target.dataItem.category;
      if(category){
        return "https://www.amcharts.com/wp-content/uploads/flags/" + category.split(" ").join("-").toLowerCase() + ".svg";
      }
      return href;
    })
    categoryAxis.dataItems.template.bullet = image;
    
    
    
    var valueAxis = chart.yAxes.push(new am4charts.ValueAxis());
    valueAxis.min = 0;
    valueAxis.renderer.minGridDistance = 30;
    valueAxis.renderer.baseGrid.disabled = true;
    
    
    var series = chart.series.push(new am4charts.ColumnSeries());
    series.dataFields.categoryX = "country";
    series.dataFields.valueY = "visits";
    series.columns.template.tooltipText = "{valueY.value}";
    series.columns.template.tooltipY = 0;
    series.columns.template.strokeOpacity = 0;
    
    // as by default columns of the same series are of the same color, we add adapter which takes colors from chart.colors color set
    series.columns.template.adapter.add("fill", function(fill, target) {
      return chart.colors.getIndex(target.dataItem.index);
    });
    
    });