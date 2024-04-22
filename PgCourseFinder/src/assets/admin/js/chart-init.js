var optionsProfileVisit = {
	annotations: {
		position: 'back'
	},
	dataLabels: {
		enabled:false
	},
	chart: {
		type: 'bar',
		height: 450
	},
	fill: {
		opacity:1
	},
	plotOptions: {
	},
	series: [{
		name: 'Visit',
		data: [11,15,20,20,10,30,20,18,24,29,30,10]
	}],
	colors: ['#9cd02d'],
	xaxis: {
		categories: ["Jan","Feb","Mar","Apr","May","Jun","Jul", "Aug","Sep","Oct","Nov","Dec"],
	},
	fill: {
		type: 'gradient',
		gradient: {
		  shade: 'light',
		  type: "vertical",
		  shadeIntensity: 0.5,
		  gradientToColors: ['#D2E34A'], // optional, if not defined - uses the shades of same color in series
		  inverseColors: true,
		  opacityFrom: 1,
		  opacityTo: 1,
		  stops: [0, 100],
		  colorStops: []
		}
	},
	responsive: [
	  {
		breakpoint: 576,
		options: {
			chart: {
				height: 250
			}
		}
	  },
	  {
		breakpoint: 1700,
		options: {
			chart: {
				height: 350
			}
		}
	  }
	]
}

var optionsAnalytics = {
	series: [{
		name: 'series1',
		data: [610, 800, 600, 430, 540, 640, 605, 805,430, 540, 340, 605]
	}],
	chart: {
		height: 450,
		type: 'area',
		toolbar: {
			tools: {
				download: true,
				zoom: false,
				zoomin: true,
				zoomout: true,
				pan: true,
				reset: true | '<img src="/static/icons/reset.png" width="20">'
			},
		},
	},
	colors: ['#9cd02d'],
	stroke: {
		width: 2,
	},
	xaxis: {
		type: 'datetime',
		categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z","2018-09-19T07:30:00.000Z","2018-09-19T08:30:00.000Z","2018-09-19T09:30:00.000Z","2018-09-19T10:30:00.000Z","2018-09-19T11:30:00.000Z"],
		axisBorder: {
			show:false
		},
	},
	dataLabels: {
		enabled: false,
	},
	show:false,
	tooltip: {
		x: {
			format: 'dd/MM/yy HH:mm'
		},
	},
	responsive: [
	  {
		breakpoint: 576,
		options: {
			chart: {
				height: 250
			}
		}
	  },
	  {
		breakpoint: 1700,
		options: {
			chart: {
				height: 350
			}
		}
	  }
	]
};


var chartProfileVisit = new ApexCharts(document.querySelector("#chart-profile-visit"), optionsProfileVisit).render();
var chartAnalytics = new ApexCharts(document.querySelector("#chart-analytics"), optionsAnalytics).render();