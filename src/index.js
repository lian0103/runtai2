import QAlist from './util/QAlist'
var windowWidth =window.innerWidth ;
var isPhoneSize = window.innerWidth <= 800 ? true : false;

$(document).ready(function () {
    window.addEventListener('resize',function(){
        let nowWidth = window.innerWidth;
        if(!isPhoneSize && nowWidth <= 995){
            window.location.reload();
        }else if(isPhoneSize && nowWidth>995){
            window.location.reload();
        }
    },false);
    window.addEventListener('scroll',function(){
        changeNavBar('mainPage');
    },false);
    switchPage('mainPage',[btnInit]);
})

function btnInit(){
    $('.btnInitTar').each(function(){
        let domStr = $(this).attr('data-link');
        $(this).click(function(){
            switchPage(domStr);
            if(isPhoneSize){$('#btn-menu').click();}
        })
    });
}

window.changeNavBar = function(page){
    let bodyTop =window.pageYOffset;
    console.log(bodyTop);
    if(bodyTop>=80){
        if(page=="mainPage"){
            $('.navbarSecond').addClass('changeNavBar')
        }else{
            $('.navbarSecond').addClass('changeNavBarForOtherPage');
        }
        
    }else{
        if(page=="mainPage"){
            $('.navbarSecond').removeClass('changeNavBar')
        }else{
            $('.navbarSecond').removeClass('changeNavBarForOtherPage');
        }
        
    }
}

window.winReload = function(){
    window.location.reload();
}

window.srcollToBottom = function(){
    window.scrollTo(0,2000);
}

window.particlesJSinit = function(){
    particlesJS.load('wrapper-particlesJS', './src/util/particlesjs-config.json', function() {
        console.log('callback - particles.js config loaded');
    });
}

window.switchPage = function(page,callbackFns = false){
    if(page == null){
        return
    }
    $('#app').removeClass('fixMove');
    $('.navbarSecond').addClass('bgInit')
    switch (page){
        case "mainPage":
            $('#app').load('./src/pages/mainPage.html');
            window.location.hash = 'mainPage';
            if(!isPhoneSize){
                $('.navbarSecond').removeClass('bgInit')
            }
        break;
        case "carLoan":
            window.location.hash = 'carLoan';
            $('#app').load('./src/pages/carLoan.html');
        break;
        case "creditLoanPage":
            $('#app').load('./src/pages/creditLoanPage.html');
            window.location.hash = 'creditLoanPage';
        break;
        case "preferPage":
            $('#app').load('./src/pages/preferPage.html');
            window.location.hash = 'preferPage';
        break;
        case "secondOrderLoan":
            $('#app').load('./src/pages/secondOrderLoan.html');
            window.location.hash = 'secondOrderLoan';
        break;
    }

    if(callbackFns){
        for(let i=0;i<callbackFns.length;i++){
            setTimeout(callbackFns[i],1000)
        }
        
    }

    let domlinks = $('a[data-link]');
    domlinks.each(function(){
        $(this).removeClass('active');
    })
    
    let domTars = $(`a[data-link="${page}"]`);
    domTars.each(function(){
        $(this).addClass('active');
    })
}

window.QAlist = QAlist;