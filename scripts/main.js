let COLOR = '#ede7e2'

let nav = '<ul> <li class="active"><a href="index.html">1</a></li> <li><a href="index3.html">2</a></li> <li><a href="index2.html">3</a></li> <li><a href="index1.html">4</a></li></ul>'

let about = 
'<p>Omnomnom</p>'

let topnavhtml = '<a href="index.html">COOK</a> <a href="travel.html">TRAVEL</a>';
// '<ul> <li class="active"><a href="travel.html">HOUPPY ADVENTURES</a> </ul> <br>'

let footerhtml = 
'footer'

function pages() {
    document.getElementById("nav-placeholder").innerHTML = nav;
}

function aboutme() {
    document.getElementById("aboutmediv").innerHTML = about;
}

function topnavfunc() {
    document.getElementById("top-navigation").innerHTML = topnavhtml;
}

function footerfunc() {
    document.getElementById("footer").innerHTML = footerhtml;
}

function init() {
    pages();
    aboutme();
    topnavfunc();
    footerfunc();
    plotMap();
}

document.addEventListener('DOMContentLoaded', init, false)

let map;
function plotMap() {
    Highcharts.mapChart('myMap', {
        chart: {
            map: 'countries/jp/jp-all'
        },
    
        title: {
            text: 'Japan'
        },
    
        subtitle: {
            text: ''
        },
    
        mapNavigation: {
            enabled: true,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },
        allowPointSelect: true,

        plotOptions: {
            series: {
                point: {
                    events: {
                        mouseOver:function(){
                            if (this.state == "select") {
                                this.graphic.element.attributes['fill'].value = '#0C3';
                            }
                        },
                        mouseOut:function(){
                            if (this.state == "select") {
                                this.graphic.element.attributes['fill'].value = '#7CA82B';
                            }                            
                        },
                        click: hi
                        }
                    }
                }
        },
    
        colorAxis: {
            min: 0,
            // minColor: '#FFF687',
            maxColor:'#F6416C',
        },

        legend: {
            enabled: false
        },

        credits: {
            enabled: false
        },
    
        series: [{
            data: data,
            name: 'Location',
            states: {
                hover: {
                    color: '#BADA55'
                }
            },
            dataLabels: {
                enabled: true,
                format: '{point.name}'
            }
        }, {
            name: 'Separators',
            type: 'mapline',
            data: Highcharts.geojson(Highcharts.maps['countries/jp/jp-all'], 'mapline'),
            color: 'silver',
            nullColor: 'silver',
            showInLegend: false,
            enableMouseTracking: false
        }]
    });
    
}

let previouselement;

function hi(e) {
    console.log(this['hc-key']);
    if (previouselement) {
        previouselement.style.display = "none"
    }
    let element = document.getElementById(this['hc-key']);
    element.style.display = "block"
    previouselement = element;
}

var data = [
    // ['jp-hs', 0],
    // ['jp-sm', 1],
    // ['jp-yc', 2],
    // ['jp-km', 3],
    // ['jp-eh', 4],
    // ['jp-kg', 5],
    // ['jp-is', 6],
    // ['jp-hk', 7],
    ['jp-tk', 1],
    // ['jp-3461', 9],
    // ['jp-3457', 10],
    // ['jp-ib', 11],
    // ['jp-st', 12],
    // ['jp-sg', 13],
    // ['jp-yn', 14],
    // ['jp-kn', 15],
    // ['jp-fo', 16],
    // ['jp-fs', 17],
    // ['jp-3480', 18],
    // ['jp-ts', 19],
    ['jp-ky', 1],
    // ['jp-me', 21],
    // ['jp-ai', 22],
    ['jp-nr', 1],
    ['jp-os', 1],
    // ['jp-wk', 25],
    // ['jp-ch', 26],
    // ['jp-ak', 27],
    // ['jp-mg', 28],
    // ['jp-tt', 29],
    // ['jp-hg', 30],
    // ['jp-gf', 31],
    // ['jp-nn', 32],
    // ['jp-ty', 33],
    // ['jp-ni', 34],
    // ['jp-oy', 35],
    // ['jp-ao', 36],
    // ['jp-mz', 37],
    // ['jp-iw', 38],
    // ['jp-kc', 39],
    // ['jp-ot', 40],
    // ['jp-sz', 41],
    // ['jp-fi', 42],
    // ['jp-sh', 43],
    // ['jp-tc', 44],
    // ['jp-yt', 45],
    // ['jp-3302', 46]
];