(function($) {
    'use strict';

    // Doughnut Chart
    var ctx = document.getElementById("doughnut");
    var doughnut = new Chart(ctx, {
        type: 'doughnut',
        data: {
            datasets: [{
                data: [5, 5, 10, 10, 10, 40, 20],
                backgroundColor: [
                    "#3D88FB",
                    "#5637C8",
                    "#00D89E",
                    "#ACDF35",
                    "#9116CD",
                    "#FC3352",
                    "#FF9B5C"
                ],
                borderWidth: 0,

            }],
            labels: [
                'Contingency',
                'Partner/Investor',
                'Legal & Regulation',
                'Business Development',
                'Operational',
                'Product Develoment',
                'Marketing'
            ]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });


    // Line Charts
    var ctx = document.getElementById("lineChartOrange");
    var lineChartOrange = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                "Feb 1",
                "Feb 2",
                "Feb 3",
                "Feb 4",
                "Feb 5",
                "Feb 6",
                "Feb 7",
                "Feb 8",
                "Feb 9",
                "Feb 10",
                "Feb 11",
                "Feb 12",
            ],
            datasets: [{
                label: 'Profit (EUR) :',
                data: [0, 200, 280, 350, 300, 400, 480, 600, 550, 650, 600, 550],
                showTooltips: true,
                backgroundColor: (context) => {
                    const bgColor = [
                        'rgba(255, 163, 25, 0.81)',
                        'rgba(255, 163, 25, 0.41)',
                        'rgba(255, 163, 25, 0)',
                    ];
                    if (!context.chart.chartArea) {
                        return
                    }
                    const { ctx, data, chartArea: { top, bottom } } = context.chart;
                    const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                    gradientBg.addColorStop(0, bgColor[0]);
                    gradientBg.addColorStop(0.5, bgColor[1])
                    gradientBg.addColorStop(1, bgColor[2])
                    return gradientBg;
                },
                borderColor: [
                    '#FFA319',
                ],
                borderWidth: 1,
                fill: true,
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.1,
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });


    var ctx = document.getElementById("lineChartBlue");
    var lineChartBlue = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                "Feb 1",
                "Feb 2",
                "Feb 3",
                "Feb 4",
                "Feb 5",
                "Feb 6",
                "Feb 7",
                "Feb 8",
                "Feb 9",
                "Feb 10",
                "Feb 11",
                "Feb 12",
            ],
            datasets: [{
                label: 'Profit (EUR) :',
                data: [0, 200, 280, 250, 300, 400, 420, 400, 380, 400, 350, 200],
                showTooltips: true,
                backgroundColor: (context) => {
                    const bgColor = [
                        'rgba(51, 194, 255, 0.81)',
                        'rgba(51, 194, 255, 0.41)',
                        'rgba(51, 194, 255, 0)',
                    ];
                    if (!context.chart.chartArea) {
                        return
                    }
                    const { ctx, data, chartArea: { top, bottom } } = context.chart;
                    const gradientBg = ctx.createLinearGradient(0, top, 0, bottom);
                    gradientBg.addColorStop(0, bgColor[0]);
                    gradientBg.addColorStop(0.5, bgColor[1])
                    gradientBg.addColorStop(1, bgColor[2])
                    return gradientBg;
                },
                borderColor: [
                    '#33C2FF',
                ],
                borderWidth: 1,
                fill: true,
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.1,
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });


    var ctx = document.getElementById("lineChart");
    var lineChart = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                "Feb 1",
                "Feb 2",
                "Feb 3",
                "Feb 4",
                "Feb 5",
                "Feb 6",
                "Feb 7",
                "Feb 8",
                "Feb 9",
                "Feb 10",
                "Feb 11",
                "Feb 12",
            ],
            datasets: [{
                label: 'Profit (EUR) :',
                data: [200, 100, 150, 200, 180, 240, 200, 280, 250, 200, 250, 150],
                showTooltips: true,
                borderColor: [
                    '#FFFFFF',
                ]
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.1,
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    var ctx = document.getElementById("lineChart1");
    var lineChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                "Feb 1",
                "Feb 2",
                "Feb 3",
                "Feb 4",
                "Feb 5",
                "Feb 6",
                "Feb 7",
                "Feb 8",
                "Feb 9",
                "Feb 10",
                "Feb 11",
                "Feb 12",
            ],
            datasets: [{
                label: 'Profit (EUR) :',
                data: [200, 100, 150, 200, 180, 240, 200, 280, 250, 200, 250, 150],
                showTooltips: true,
                borderColor: [
                    '#FFFFFF',
                ]
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.1,
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

    var ctx = document.getElementById("lineChart2");
    var lineChart1 = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                "Feb 1",
                "Feb 2",
                "Feb 3",
                "Feb 4",
                "Feb 5",
                "Feb 6",
                "Feb 7",
                "Feb 8",
                "Feb 9",
                "Feb 10",
                "Feb 11",
                "Feb 12",
            ],
            datasets: [{
                label: 'Profit (EUR) :',
                data: [200, 100, 150, 200, 180, 240, 200, 280, 250, 200, 250, 150],
                showTooltips: true,
                borderColor: [
                    '#FFFFFF',
                ]
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.1,
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });


    var ctx = document.getElementById("lineChartPurple");
    var lineChartPurple = new Chart(ctx, {
        type: 'line',
        data: {
            labels: [
                "Feb 1",
                "Feb 2",
                "Feb 3",
                "Feb 4",
                "Feb 5",
                "Feb 6",
                "Feb 7",
                "Feb 8",
                "Feb 9",
                "Feb 10",
                "Feb 11",
                "Feb 12",
            ],
            datasets: [{
                label: 'Profit (EUR) :',
                data: [200, 100, 150, 200, 180, 240, 200, 280, 250, 200, 250, 150],
                showTooltips: true,
                borderColor: [
                    '#8c7cf0',
                ]
            }]
        },
        options: {
            elements: {
                point: {
                    radius: 0
                },
                line: {
                    tension: 0.1,
                }
            },
            scales: {
                x: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                },
                y: {
                    ticks: {
                        display: false
                    },
                    grid: {
                        display: false,
                        drawBorder: false,
                    },
                }
            },
            plugins: {
                legend: {
                    display: false
                }
            }
        }
    });

})(jQuery);