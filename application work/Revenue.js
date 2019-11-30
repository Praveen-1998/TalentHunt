window.onload = function () {

var chart = new CanvasJS.Chart("chartContainer", {
	animationEnabled: true,
	theme: "light2",
	title:{
		text: "Company Revenue"
	},
	axisX:{
		valueFormatString: "DD MMM",
		crosshair: {
			enabled: true,
			snapToDataPoint: true
		}
	},
	axisY: {
		title: "CURRENCY(Millions)",
		crosshair: {
			enabled: true
		}
	},
	toolTip:{
		shared:true
	},  
	legend:{
		cursor:"pointer",
		verticalAlign: "bottom",
		horizontalAlign: "left",
		dockInsidePlotArea: true
	},
	data: [{
		type: "line",
		showInLegend: true,
		name: "Total Income",
		markerType: "square",
		xValueFormatString: "DD MMM, YYYY",
		color: "#F08080",
		dataPoints: [
			{ x: new Date(2018, 0, 4), y: 65 },
			{ x: new Date(2018, 2, 5), y: 70 },
			{ x: new Date(2018, 3, 5), y: 71 },
			{ x: new Date(2018, 4, 6), y: 65 },
			{ x: new Date(2018, 5, 7), y: 73 },
			{ x: new Date(2018, 6, 8), y: 96 },
			{ x: new Date(2018, 7, 9), y: 84 },
			{ x: new Date(2018, 8, 10), y: 85 },
			{ x: new Date(2018, 9, 11), y: 86 },
			{ x: new Date(2018, 10, 12), y: 94 },
			{ x: new Date(2018, 11, 13), y: 97 },
			{ x: new Date(2018, 12, 14), y: 86 }
		]
	},
	{
		type: "line",
		showInLegend: true,
		name: "Estimated Income",
		lineDashType: "dash",
		dataPoints: [
			{ x: new Date(2018, 0, 4), y: 51 },
			{ x: new Date(2018, 2, 5), y: 56 },
			{ x: new Date(2018, 3, 5), y: 50 },
			{ x: new Date(2018, 4, 6), y: 55 },
			{ x: new Date(2018, 5, 7), y: 54 },
			{ x: new Date(2018, 6, 8), y: 69 },
			{ x: new Date(2018, 7, 9), y: 65 },
			{ x: new Date(2018, 8, 10), y: 63 },
			{ x: new Date(2018, 9, 11), y: 39 },
			{ x: new Date(2018, 10, 12), y: 73 },
			{ x: new Date(2018, 11, 13), y: 66 },
			{ x: new Date(2018, 12, 14), y: 52 }
			
		]
	}]
});
chart.render();
}
