
import $ from "jquery";
// import mainpage from './pages/mainPage.html'

$(document).ready(function () {
    switchPage('mainPage',[textAnimation,btnInit]);
    document.addEventListener('turbolinks:load', function () {FontAwesome.dom.i2svg()});
})

function btnInit(){
    $('.btnInitTar').each(function(){
        let domStr = $(this).attr('data-link');
        $(this).click(function(){
            switchPage(domStr);
        })
    })
}

function switchPage(page,callbackFns = false){
    if(page == null){
        return
    }

    switch (page){
        case "mainPage":
            $('#app').load('./src/pages/mainPage.html');
        break;
        case "carLoan":
            $('#app').load('./src/pages/carLoan.html');
        break;
        case "creditLoanPage":
            $('#app').load('./src/pages/creditLoanPage.html');
        break;
        case "preferPage":
            $('#app').load('./src/pages/preferPage.html');
        break;
        case "secondOrderLoan":
            $('#app').load('./src/pages/secondOrderLoan.html');
        break;
    }

    if(callbackFns){
        for(let i=0;i<callbackFns.length;i++){
            setTimeout(callbackFns[i],1000)
        }
        
    }
}


function textAnimation(){
    var elements = document.getElementsByClassName('typewrite');
    console.log('inHere')
    for (var i = 0; i < elements.length; i++) {
        var toRotate = elements[i].getAttribute('data-type');
        var period = elements[i].getAttribute('data-period');
        if (toRotate) {
            new TxtType(elements[i], JSON.parse(toRotate), period);
        }
    }
    // INJECT CSS
    var css = document.createElement("style");
    css.type = "text/css";
    css.innerHTML = ".typewrite > .wrap { padding:0px 10px; border-right: .5rem solid #444}";
    document.body.appendChild(css);
}

var TxtType = function (el, toRotate, period) {
    this.toRotate = toRotate;
    this.el = el;
    this.loopNum = 0;
    this.period = parseInt(period, 10) || 2000;
    this.txt = '';
    this.tick();
    this.isDeleting = false;
};

TxtType.prototype.tick = function () {
    var i = this.loopNum % this.toRotate.length;
    var fullTxt = this.toRotate[i];

    if (this.isDeleting) {
        this.txt = fullTxt.substring(0, this.txt.length - 1);
    } else {
        this.txt = fullTxt.substring(0, this.txt.length + 1);
    }

    this.el.innerHTML = '<span class="wrap">' + this.txt + '</span>';

    var that = this;
    var delta = 200 - Math.random() * 100;

    if (this.isDeleting) { delta /= 2; }

    if (!this.isDeleting && this.txt === fullTxt) {
        delta = this.period;
        this.isDeleting = true;
    } else if (this.isDeleting && this.txt === '') {
        this.isDeleting = false;
        this.loopNum++;
        delta = 500;
    }

    setTimeout(function () {
        that.tick();
    }, delta);
};
