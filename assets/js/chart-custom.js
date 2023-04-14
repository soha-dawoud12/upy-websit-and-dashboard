// === include 'setup' then 'config' above ===
//     let smallScreen = $(window).width() <= 375 ? true : false;
//     let mediumScreen = $(window).width() <= 768 ? true : false;

let smallScreen = $(window).width() <= 375 ? true : false;
let mediumScreen = $(window).width() <= 768 ? true : false;
var ctx = document.getElementById('myAreaChart');
let myAreaChart = new Chart(ctx, {
    axis: 'y',
    type: 'bar',


    data :{
        labels : [05, 04, 03, 02, 01],
        datasets: [{
            // height: smallScreen ? 300 : 400,
            fill:false,
        label: '',
        data: [51, 27, 17, 15, 35, 25, 30, 35, 40, 45, 50, 55, 60],
            barPercentage: 0.5,
        barThickness: 10,
        // backgroundColor: [
        //     '#4468EC',
        //     '#FB8686',
        //
        // ],
            backgroundColor: function(context) {
                const index = context.dataIndex;
                const value = context.dataset.data[index];
                return value < 50 ? '#FB8686' :  "#4468EC";
            },


        borderWidth: 1
    }]
    },

options: {
    indexAxis: 'y',
        layout:
    {
        padding: 45
    },
    plugins: {
        legend: false,
    },
    responsive:true,
    maintainAspectRatio:true,
    scales: {
        xAxes: [{
            time: {
                unit: 'date'
            },
            gridLines: {
                display: false,
                drawBorder: false
            },
            ticks: {
                maxTicksLimit: 7
            }
        }],
        yAxes: [{
            ticks: {
                maxTicksLimit: 5,
                padding: 10,
                // Include a dollar sign in the ticks
                callback: function(value, index, values) {
                    return '$' + number_format(value);
                }
            },
            gridLines: {
                color: "rgb(234, 236, 244)",
                zeroLineColor: "rgb(234, 236, 244)",
                drawBorder: false,
                borderDash: [2],
                zeroLineBorderDash: [2]
            }
        }],
    },
    legend: {
        display: false
    },

},
    } );
//
// myAreaChart.canvas.parentNode.style.height = '300px';
// myAreaChart.canvas.parentNode.style.width = '300px';

var ctx = document.getElementById('pieChart1');
 new Chart(ctx, {

    type: 'doughnut',
    data :{
        // labels : [ 'Red', 'Blue',],
        datasets: [{
            fill:false,
            label: '35%',
            data: [20,80],
            barPercentage: 0.5,
            barThickness: 10,
            backgroundColor: [
                '#5BC0DE',
                '#D8D8D8',
            ],
        }],
        hoverOffset: 4
    },

    options: {
        elements: {
            center: {
              text: 'Red is 2/3 the total numbers',
              color: '#FF6384', // Default is #000000
              fontStyle: 'Arial', // Default is Arial
              sidePadding: 20, // Default is 20 (as a percentage)
              minFontSize: 20, // Default is 20 (in px), set to false and text will not wrap.
              lineHeight: 25 // Default is 25 (in px), used for when text wraps
            }
          },
        layout:
            {
                padding: 2
            },
        responsive:true,
        maintainAspectRatio:true,


    },
} );




var ctx = document.getElementById('pieChart2');
new Chart(ctx, {

    type: 'doughnut',
    data :{

        datasets: [{
            fill:false,
            label: '',
            data: [35,75],
            barPercentage: 0.5,
            barThickness: 5,
            backgroundColor: [
                '#313653',
                '#D8D8D8',
            ],
        }],
        hoverOffset: 4,

    },

    options: {


        layout:
            {
                padding: 2
            },
        responsive:true,
        maintainAspectRatio:true,


    },
} );


var ctx = document.getElementById('pieChart3');
new Chart(ctx, {

    type: 'doughnut',
    data :{
        // labels : [ 'Red', 'Blue',],
        datasets: [{
            fill:false,
            label: '',
            data: [25,75],
            barPercentage: 0.5,
            barThickness: 10,
            backgroundColor: [
                '#1E75A2',
                '#D8D8D8',
            ],
        }],
        hoverOffset: 4
    },

    options: {

        layout:
            {
                padding: 2
            },
        responsive:true,
        maintainAspectRatio:true,


    },
} );


var ctx = document.getElementById('pieChart4');
new Chart(ctx, {

    type: 'doughnut',
    data :{

        datasets: [{
            fill:false,
            label: '',
            data: [75,25],
            barPercentage: 0.5,
            barThickness: 10,
            backgroundColor: [
                '#34334A',
                '#D8D8D8',
            ],
        }],
        hoverOffset: 4
    },

    options: {

        layout:
            {
                padding: 2
            },
        responsive:true,
        maintainAspectRatio:true,


    },
} );


var ctx = document.getElementById('pieChart5');
new Chart(ctx, {

    type: 'doughnut',
    data :{

        datasets: [{
            fill:false,
            label: '',
            data: [75,25],
            barPercentage: 0.5,
            barThickness: 10,
            backgroundColor: [
                '#5CB85C',
                '#D8D8D8',
            ],
        }],
        hoverOffset: 4
    },

    options: {

        layout:
            {
                padding: 2
            },
        responsive:true,
        maintainAspectRatio:true,


    },
} );


var ctx = document.getElementById('pieChart6');
new Chart(ctx, {

    type: 'doughnut',
    data :{

        datasets: [{
            fill:false,
            label: '',
            data: [75,25],
            barPercentage: 0.5,
            barThickness: 10,
            backgroundColor: [

                '#D8D8D8',
                '#D9534F',

            ],
        }],
        hoverOffset: 4
    },

    options: {

        layout:
            {
                padding: 2
            },
        responsive:true,
        maintainAspectRatio:true,


    },
} );


var ctx = document.getElementById('pieChart7');
new Chart(ctx, {

    type: 'doughnut',
    data :{

        datasets: [{
            fill:false,
            label: '',
            data: [75,25],
            barPercentage: 0.5,
            barThickness: 10,
            backgroundColor: [

                '#D8D8D8',
                '#F0AD4E',

            ],
        }],
        hoverOffset: 4
    },

    options: {

        layout:
            {
                padding: 2
            },
        responsive:true,
        maintainAspectRatio:true,


    },
} );


var ctx = document.getElementById('bar2');
Chart.defaults.font.size = 17;

 new Chart(ctx, {
    axis: 'y',
    type: 'bar',


    data :{
        labels: ['overall course rate', 'preparation & admin', 'preparation & admin', 'preparation & admin', 'preparation & admin'],

        datasets: [{
            // height: smallScreen ? 300 : 400,

            // label:'  ' ,
            // fill:false,
            data: [95,39,75,87,59],
            barPercentage: 0.5,
            barThickness: 10,
            backgroundColor: [
                '#4468EC',
                '#FB8686',

            ],
            borderWidth: 1,

        }]
    },

    options: {
        plugins: {
            legend: false,

        },
        indexAxis: 'y',
        layout:
            {
                padding: 40
            },
        // font: {
        //     size: 20
        // },

        responsive:true,
        maintainAspectRatio:true,

    },
} );



var lineGraphChartAssessment = document.getElementById('chart-pre-post');
 new Chart(lineGraphChartAssessment, {

    type: 'line',
    data: {
        labels: [50,60,70,80,90,100,110,120,130,140,150],
        datasets: [
            {
            label:"Pre",
            fill: false,
            lineTension: 0,
            backgroundColor: "#4468EC",
            borderColor: "#4468EC",
            data: [7,8,8,9,9,9,10,30,30,30,30]
            },
            {
            label:"Post",
            fill: false,
            lineTension: 0,
            backgroundColor: "#FB8686",
            borderColor: "#FB8686",
            data: [19,20,22,30,30,30,31,31,31,31,32]
            }      
        ]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        }
    },
    options: {
      responsive: true,
      plugins: {
        legend: {
          position: 'top',
          align:'end',
          labels: {
            usePointStyle: true,
            boxWidth: 30,
            boxHeight:20
          }
        },
        title: {
          display: false,
        }
      }
    },
} );


var barChartAssessment = document.getElementById('chart-pre-post-bar');
barChartAssessment.height = 512;
 new Chart(barChartAssessment, {
    type: 'bar',
    data: {
        labels: ['33% Pre' , '60% Post'],
        datasets: [
            {
            lineTension: 0,
            backgroundColor: ["#4468EC" , "#FB8686"],
            borderColor: "#4468EC",
            // borderRadius:50,
            barThickness:20,
            data: [33,60]
            },    
        ]
      },
      options: {
        legend: {display: false},
        scales: {
          yAxes: [{ticks: {min: 6, max:16}}],
        }
    },
    options: {
        responsive: true,
        scales: {
            y: {
                display: false,
            },
            x: {
                grid: {
                    display: false,
                },
            }
        },
        plugins: {
            legend: {
                display:false,
            },
        }
    },
    
} );

