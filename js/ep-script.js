/**
 * detect IE
 * returns version of IE or false, if browser is not Internet Explorer
 */
function detectIE() {
    var ua = window.navigator.userAgent;

    var msie = ua.indexOf('MSIE ');
    if (msie > 0) {
        // IE 10 or older => return version number
        return parseInt(ua.substring(msie + 5, ua.indexOf('.', msie)), 10);
    }

    var trident = ua.indexOf('Trident/');
    if (trident > 0) {
        // IE 11 => return version number
        var rv = ua.indexOf('rv:');
        return parseInt(ua.substring(rv + 3, ua.indexOf('.', rv)), 10);
    }

    var edge = ua.indexOf('Edge/');
    if (edge > 0) {
       // Edge (IE 12+) => return version number
       return parseInt(ua.substring(edge + 5, ua.indexOf('.', edge)), 10);
    }

    // other browser
    return false;
}

$(document).ready(function () {
  if( detectIE() ){ // MSIE Browser
    var swiper = new Swiper('.swiper-container', {
          direction: 'vertical',
          pagination: '.swiper-pagination',//
//           effect: 'cube',
          paginationClickable: true,
          grabCursor: false,
          autoplay: 10000,
          keyboardControl: true,
          mousewheelControl: true,
          loop: true// ,
//           cube: {
//           shadow: false,
//           slideShadows: false
//           }
      });
    }else{ // other Browser
      var swiper = new Swiper('.swiper-container', {
            direction: 'vertical',
            pagination: '.swiper-pagination',//
            effect: 'cube',
            paginationClickable: true,
            grabCursor: false,
            autoplay: false,
            keyboardControl: true,
            mousewheelControl: true,
            loop: true,
            cube: {
              shadow: false,
              slideShadows: false
            }
        });
    }
    
    
  var team_swiper = new Swiper('.team-swiper-container', {
    pagination: '.swiper-pagination',
    slidesPerView: 3,
    paginationClickable: true,
    spaceBetween: 30,
    grabCursor: true,
    autoplayDisableOnInteraction: true,
    breakpoints: {
        // when window width is <= 320px
        320: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 480px
        480: {
          slidesPerView: 2,
          spaceBetween: 20
        },
        // when window width is <= 640px
        768: {
          slidesPerView: 1,
          spaceBetween: 20
        }
      }
    });
      
  $('.navbar').offcanvas({
    disableScrolling: false,
    canvas: true
  })    
          
  });