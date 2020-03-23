let nav = '<ul> <li class="active"><a href="index.html">1</a></li> <a href="index3.html">2</a></li> <li><a href="index2.html">3</a></li> <li><a href="index1.html">4</a></li></ul>'

let about = 
'<p>Omnomnom</p>'

let topnavhtml = 
'top navigation bar'

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
}

document.addEventListener('DOMContentLoaded', init, false)
