var optionsBasicLine = {
	series: [{
	  name: "Desktops",
	  data: [10, 41, 35, 51, 49, 62, 69, 91, 148]
  }],
	chart: {
	height: 350,
	type: 'line',
	zoom: {
	  enabled: false
	}
  },
  dataLabels: {
	enabled: false
  },
  colors: ['#9cd02d'],
  stroke: {
	curve: 'straight'
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 0,
          color: "#9cd02d",
          opacity: 1
        },
        {
          offset: 50,
          color: "#D2E34A",
          opacity: 1
        },
        {
          offset: 100,
          color: "#9cd02d",
          opacity: 1
        }
      ]
    },
  },
  title: {
	text: 'Product Trends by Month',
	align: 'left'
  },
  grid: {
	row: {
	  colors: ['#f3f3f3', 'transparent'],
	  opacity: 0.5
	},
  },
  xaxis: {
	categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'],
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
var chart = new ApexCharts(document.querySelector("#basic-line-chart"), optionsBasicLine).render();


var optionsAreaChart = {
series: [{
    name: 'series1',
    data: [31, 40, 28, 51, 42, 109, 100]
  }, {
    name: 'series2',
    data: [11, 32, 45, 32, 34, 52, 41]
  }],
    chart: {
    height: 350,
    type: 'area'
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#9cd02d', '#D2E34A'],
  stroke: {
    curve: 'smooth',
    colors: ['#9cd02d', '#D2E34A']
  },
  fill: {
    colors: ['#9cd02d', '#D2E34A']
  },
  xaxis: {
    type: 'datetime',
    categories: ["2018-09-19T00:00:00.000Z", "2018-09-19T01:30:00.000Z", "2018-09-19T02:30:00.000Z", "2018-09-19T03:30:00.000Z", "2018-09-19T04:30:00.000Z", "2018-09-19T05:30:00.000Z", "2018-09-19T06:30:00.000Z"]
  },
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
var chart = new ApexCharts(document.querySelector("#AreaChart"), optionsAreaChart).render();


var optionsAreaNegative = {
    series: [{
    name: 'north',
    data: [{
        x: 1996,
        y: 322
      },
      {
        x: 1997,
        y: 324
      },
      {
        x: 1998,
        y: 329
      },
      {
        x: 1999,
        y: 342
      },
      {
        x: 2000,
        y: 348
      },
      {
        x: 2001,
        y: 334
      },
      {
        x: 2002,
        y: 325
      },
      {
        x: 2003,
        y: 316
      },
      {
        x: 2004,
        y: 318
      },
      {
        x: 2005,
        y: 330
      },
      {
        x: 2006,
        y: 355
      },
      {
        x: 2007,
        y: 366
      },
      {
        x: 2008,
        y: 337
      },
      {
        x: 2009,
        y: 352
      },
      {
        x: 2010,
        y: 377
      },
      {
        x: 2011,
        y: 383
      },
      {
        x: 2012,
        y: 344
      },
      {
        x: 2013,
        y: 366
      },
      {
        x: 2014,
        y: 389
      },
      {
        x: 2015,
        y: 334
      }
    ]
  }, {
    name: 'south',
    data: [
      {
        x: 1996,
        y: 162
      },
      {
        x: 1997,
        y: 90
      },
      {
        x: 1998,
        y: 50
      },
      {
        x: 1999,
        y: 77
      },
      {
        x: 2000,
        y: 35
      },
      {
        x: 2001,
        y: -45
      },
      {
        x: 2002,
        y: -88
      },
      {
        x: 2003,
        y: -120
      },
      {
        x: 2004,
        y: -156
      },
      {
        x: 2005,
        y: -123
      },
      {
        x: 2006,
        y: -88
      },
      {
        x: 2007,
        y: -66
      },
      {
        x: 2008,
        y: -45
      },
      {
        x: 2009,
        y: -29
      },
      {
        x: 2010,
        y: -45
      },
      {
        x: 2011,
        y: -88
      },
      {
        x: 2012,
        y: -132
      },
      {
        x: 2013,
        y: -146
      },
      {
        x: 2014,
        y: -169
      },
      {
        x: 2015,
        y: -184
      }
    ]
  }],
    chart: {
    type: 'area',
    height: 350
  },
  dataLabels: {
    enabled: false
  },
  colors: ['#9cd02d', '#D2E34A'],
  stroke: {
    curve: 'straight',
    colors: ['#9cd02d', '#D2E34A']
  },
  fill: {
    colors: ['#9cd02d', '#D2E34A']
  },
  xaxis: {
    type: 'datetime',
    axisBorder: {
      show: false
    },
    axisTicks: {
      show: false
    }
  },
  yaxis: {
    tickAmount: 4,
    floating: false,
  
    labels: {
      style: {
        colors: '#8e8da4',
      },
      offsetY: -7,
      offsetX: 0,
    },
    axisBorder: {
      show: false,
    },
    axisTicks: {
      show: false
    }
  },
  tooltip: {
    x: {
      format: "yyyy",
    },
    fixed: {
      enabled: false,
      position: 'topRight'
    }
  },
  grid: {
    yaxis: {
      lines: {
        offsetX: -30
      }
    },
    padding: {
      left: 20
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
};
var chart = new ApexCharts(document.querySelector("#AreaNegative"), optionsAreaNegative).render();


var optionsColumnChart = {
    series: [{
    name: 'Net Profit',
    data: [44, 55, 57, 56, 61, 58, 63, 60, 66]
  }, {
    name: 'Revenue',
    data: [76, 85, 101, 98, 87, 105, 91, 114, 94]
  }, {
    name: 'Free Cash Flow',
    data: [35, 41, 36, 26, 45, 48, 52, 53, 41]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      horizontal: false,
      columnWidth: '55%',
      endingShape: 'rounded'
    },
  },
  dataLabels: {
    enabled: false
  },
  stroke: {
    show: true,
    width: 2,
    colors: ['transparent']
  },
  colors: ['#9cd02d', '#D2E34A', '#7ca524'],
  xaxis: {
    categories: ['Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
  },
  yaxis: {
    title: {
      text: '$ (thousands)'
    }
  },
  fill: {
    colors: ['#9cd02d', '#D2E34A', '#7ca524']
  },
  tooltip: {
    y: {
      formatter: function (val) {
        return "$ " + val + " thousands"
      }
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
};
var chart = new ApexCharts(document.querySelector("#ColumnChart"), optionsColumnChart).render();


var optionsBarChart = {
    series: [{
    data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380]
  }],
    chart: {
    type: 'bar',
    height: 350
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    }
  },
  colors: ['#9cd02d'],
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 0,
          color: "#9cd02d",
          opacity: 1
        },
        {
          offset: 50,
          color: "#D2E34A",
          opacity: 1
        },
        {
          offset: 100,
          color: "#7ca524",
          opacity: 1
        }
      ]
    },
  },
  dataLabels: {
    enabled: false
  },
  xaxis: {
    categories: ['South Korea', 'Canada', 'United Kingdom', 'Netherlands', 'Italy', 'France', 'Japan',
      'United States', 'China', 'Germany'
    ],
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
var chart = new ApexCharts(document.querySelector("#BarChart"), optionsBarChart).render();


var optionsTimelineChart = {
    series: [
    {
      data: [
        {
          x: 'Code',
          y: [
            new Date('2019-03-02').getTime(),
            new Date('2019-03-04').getTime()
          ]
        },
        {
          x: 'Test',
          y: [
            new Date('2019-03-04').getTime(),
            new Date('2019-03-08').getTime()
          ]
        },
        {
          x: 'Validation',
          y: [
            new Date('2019-03-08').getTime(),
            new Date('2019-03-12').getTime()
          ]
        },
        {
          x: 'Deployment',
          y: [
            new Date('2019-03-12').getTime(),
            new Date('2019-03-18').getTime()
          ]
        }
      ]
    }
  ],
    chart: {
    height: 350,
    type: 'rangeBar'
  },
  plotOptions: {
    bar: {
      horizontal: true
    }
  },
  fill: {
    type: 'gradient',
    gradient: {
      shade: 'light',
      shadeIntensity: 1,
      type: 'horizontal',
      opacityFrom: 1,
      opacityTo: 1,
      colorStops: [
        {
          offset: 0,
          color: "#9cd02d",
          opacity: 1
        },
        {
          offset: 50,
          color: "#D2E34A",
          opacity: 1
        }
      ]
    },
  },
  xaxis: {
    type: 'datetime'
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
var chart = new ApexCharts(document.querySelector("#TimelineChart"), optionsTimelineChart).render();


var optionsPieChart = {
    series: [44, 55, 13, 22],
    chart: {
    type: 'pie',
  },
  legend: {
    position: 'bottom'
  },
  colors: ['#9cd02d', '#7ca524', '#D2E34A', '#c2ff3e'],
  labels: ['Team A', 'Team B', 'Team C', 'Team E']
};
var chart = new ApexCharts(document.querySelector("#PieChart"), optionsPieChart).render();


var optionsRadarChart = {
    series: [{
    name: 'Series 1',
    data: [80, 50, 30, 40, 100, 20],
  }],
    chart: {
    type: 'radar',
  },
  colors: ['#9cd02d'],
  xaxis: {
    categories: ['January', 'February', 'March', 'April', 'May', 'June']
  }
};
var chart = new ApexCharts(document.querySelector("#RadarChart"), optionsRadarChart).render();


var optionsPolarAreaChart = {
    series: [14, 23, 21, 17, 15, 10, 12, 17, 21],
    chart: {
    type: 'polarArea',
  },
  stroke: {
    width: 0,
  },
  legend: {
    position: 'bottom'
  },
  fill: {
    opacity: 0.8
  },
  theme: {
    monochrome: {
      enabled: true,
      color: "#9cd02d",
      shadeTo: 'light',
      shadeIntensity: 0.45,
    }
  }
};
var chart = new ApexCharts(document.querySelector("#PolarAreaChart"), optionsPolarAreaChart).render();