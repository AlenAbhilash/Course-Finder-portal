(function ($) {
    'use strict';
    $(document).ready(function(){

        
        //------------------------------------------------------------------------------------------------------------------
        // chart js plugin
        //------------------------------------------------------------------------------------------------------------------

        var sitevisit = document.getElementById("siteVisit").getContext("2d");
        var xValues = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun' ];
        new Chart(sitevisit, {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    label: ' Current Week Visits',
                    data: [879, 980, 594, 398, 1345, 1101, 1469],
                    borderWidth: 1,
                    borderColor: '#659ce0',
                    fill: true,
                    backgroundColor: 'rgba(101, 156, 224, 0.3)',
                    lineTension: 0.3,
                    pointRadius: 2,
                    pointHoverRadius: 3,
                    pointBorderWidth: 1
                }, {
                    label: ' Last Week Visits',
                    data: [787, 591, 398, 402, 786, 978, 1150],
                    borderWidth: 1,
                    borderColor: '#ed6b76',
                    fill: true,
                    backgroundColor: 'rgba(237, 107, 118, 0.3)',
                    lineTension: 0.3,
                    pointRadius: 2,
                    pointHoverRadius: 3,
                    pointBorderWidth: 1
                }]
            },
            options: {
                plugins: {
                    title: {
                        display: false
                    },
                },
                interaction: {
                    intersect: false,
                    axis: 'x'
                },
                
                scales: {
                    y: {
                        min: 0,
                    },
                    x: {
                        beginAtZero: false,
                    },
                }
            }
        });

        new Chart("user-activity", {
            type: "line",
            data: {
                labels: xValues,
                datasets: [{
                    label: ' Current Week Visits',
                    data: [879, 980, 594, 398, 1345, 1101, 1469],
                    borderWidth: 1,
                    borderColor: 'rgba(101, 156, 224, 0.5)',
                    fill: true,
                    backgroundColor: 'rgba(101, 156, 224, 0.3)',
                    lineTension: 0.3,
                    pointRadius: 2,
                    pointHoverRadius: 3,
                    pointBorderWidth: 1
                }]
            },
            options: {
                plugins: {
                    legend: {
                        display: false
                    },
                    title: {
                        display: false
                    },
                    labels: {
                        display: false
                    }
                },
                interaction: {
                    intersect: false,
                    axis: 'x'
                },
                
                scales: {
                    y: {
                        min: 0,
                        ticks: {
                            display: false
                        },
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    },
                    x: {
                        ticks: {
                            display: false
                        },
                        grid: {
                            display: false,
                            drawBorder: false
                        }
                    },
                }
            }
        });
        
        new Chart("social-chart", {
            type: "doughnut",
            data: {
                labels: ['Fb', 'Tw', 'G+'],
                datasets: [ {
                    data: [879, 980, 594],
                    
                    backgroundColor: [
                        'rgba(52, 180, 193, 0.5)',
                        'rgba(238, 224, 139, 0.9)',
                        'rgba(237, 107, 118, 0.5)'
                    ],
                    borderWidth: 1
                },
                ]
            },
            options: {
				title: {
					display: true,
					text: "This is your 401(k) account's current asset mix"
				},
                animation: {
                    animateScale: true,
                    animateRotate: true
                },
                responsive: true,
                maintainAspectRatio: false,
                    
                legend: {
                    position: 'right',
                    labels:{
                        boxWidth: 10,
                        padding: 12
                    }
                },
            },
        });

        var $demo_chart_line = $('#demo-chart-line');
        if ($demo_chart_line.length > 0) {
            new Chart($demo_chart_line, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: ' Current Week Visits',
                        data: [879, 980, 594, 398, 1345, 1101, 1469],
                        backgroundColor: 'rgba(101, 156, 224, .3)',
                        borderColor: 'rgba(101, 156, 224, .4)',
                        borderWidth: 1,
                        pointRadius: 3,
                        pointHitRadius: 5
                    }, {
                        label: ' Last Week Visits',
                        data: [787, 591, 398, 402, 786, 978, 1150],
                        backgroundColor: 'rgba(237, 107, 118, .3)',
                        borderColor: 'rgba(237, 107, 118, .4)',
                        borderWidth: 1,
                        pointRadius: 3,
                        pointHitRadius: 5
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        }

        var $demo_chart_bar = $('#demo-chart-bar');
        if ($demo_chart_bar.length > 0) {
            new Chart($demo_chart_bar, {
                type: 'bar',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: ' Current Week Visits',
                        data: [879, 980, 594, 398, 1345, 1101, 1469],
                        backgroundColor: [
                            'rgba(101, 156, 224, .3)',
                            'rgba( 28, 188, 139, .3)',
                            'rgba( 55, 198, 211, .3)',
                            'rgba(241, 196,  15, .3)',
                            'rgba(237, 107, 118, .3)',
                            'rgba(154,  89, 182, .3)',
                            'rgba( 52,  73,  94, .3)'
                        ],
                        borderColor: [
                            'rgba(101, 156, 224, .6)',
                            'rgba( 28, 188, 139, .6)',
                            'rgba( 55, 198, 211, .6)',
                            'rgba(241, 196,  15, .6)',
                            'rgba(237, 107, 118, .6)',
                            'rgba(154,  89, 182, .6)',
                            'rgba( 52,  73,  94, .6)'
                        ],
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        }

        var $demo_chart_radar = $('#demo-chart-radar');
        if ($demo_chart_radar.length > 0) {
            new Chart($demo_chart_radar, {
                type: 'radar',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [
                        {

                            label: ' Current Week Visits',
                            backgroundColor: 'rgba(101, 156, 224, .3)',

                            borderWidth: 1,
                            borderColor: 'rgba(101, 156, 224, .4)',

                            pointBackgroundColor: 'rgba(101, 156, 224, .6)',
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: 'rgba(101, 156, 224, .6)',

                            data: [879, 891, 1054, 398, 1345, 1101, 1469]
                        },
                        {

                            label: ' Last Week Visits',
                            backgroundColor: 'rgba(237, 107, 118, .3)',

                            borderWidth: 1,
                            borderColor: 'rgba(237, 107, 118, .4)',

                            pointBackgroundColor: "rgba(237, 107, 118, .6)",
                            pointBorderColor: '#fff',
                            pointHoverBackgroundColor: '#fff',
                            pointHoverBorderColor: "rgba(237, 107, 118, .6)",

                            data: [1500, 891, 398, 1000, 786, 978, 1150]
                        }
                    ]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        }

        var $demo_chart_polar_area = $('#demo-chart-polar-area');
        if ($demo_chart_polar_area.length > 0) {
            new Chart($demo_chart_polar_area, {
                type: 'polarArea',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    datasets: [{
                        label: ' Current Week Visits',
                        data: [879, 980, 594, 398, 1345, 1101],
                        backgroundColor: [
                            'rgba(101, 156, 224, .6)',
                            'rgba( 28, 188, 139, .6)',
                            'rgba( 55, 198, 211, .6)',
                            'rgba(241, 196,  15, .6)',
                            'rgba(237, 107, 118, .6)',
                            'rgba(154,  89, 182, .6)'
                        ],
                        borderColor: '#fff',
                        hoverBorderColor: '#fff',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        }

        var $demo_chart_pie = $('#demo-chart-pie');
        if ($demo_chart_pie.length > 0) {
            new Chart($demo_chart_pie, {
                type: 'pie',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    datasets: [{
                        label: ' Current Week Visits',
                        data: [879, 980, 594, 398, 1345, 1101],
                        backgroundColor: [
                            'rgba(101, 156, 224, .6)',
                            'rgba( 28, 188, 139, .6)',
                            'rgba( 55, 198, 211, .6)',
                            'rgba(241, 196,  15, .6)',
                            'rgba(237, 107, 118, .6)',
                            'rgba(154,  89, 182, .6)'
                        ],
                        borderColor: '#fff',
                        hoverBorderColor: '#fff',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        }

        var $demo_chart_doughnut = $('#demo-chart-doughnut');
        if ($demo_chart_doughnut.length > 0) {
            new Chart($demo_chart_doughnut, {
                type: 'doughnut',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
                    datasets: [{
                        label: ' Current Week Visits',
                        data: [879, 980, 594, 398, 1345, 1101],
                        backgroundColor: [
                            'rgba(101, 156, 224, .6)',
                            'rgba( 28, 188, 139, .6)',
                            'rgba( 55, 198, 211, .6)',
                            'rgba(241, 196,  15, .6)',
                            'rgba(237, 107, 118, .6)',
                            'rgba(154,  89, 182, .6)'
                        ],
                        borderColor: '#fff',
                        hoverBorderColor: '#fff',
                        borderWidth: 1
                    }]
                },
                options: {
                    scales: {
                        yAxes: [{
                            ticks: {
                                beginAtZero:true
                            }
                        }]
                    }
                }
            });
        }
    });
}(jQuery));