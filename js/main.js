window.addEventListener('load', function() {
    var allElements = document.getElementsByTagName('*');
    Array.prototype.forEach.call(allElements, function(el) {
        var includePath = el.dataset.includePath;
        if (includePath) {
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    el.outerHTML = this.responseText;
                }
            };
            xhttp.open('GET', includePath, true);
            xhttp.send();
        }
    });
});


window.addEventListener('scroll', function() {
    var header = document.getElementById('gnb');
    var scrollPosition = window.scrollY;

    // 특정 스크롤 위치 이상에서 헤더 스타일 변경
    if (scrollPosition > 190) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});


var swiper = new Swiper(".first", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
});


var swiper = new Swiper(".second", {
    spaceBetween: 0,
    centeredSlides: true,
    loop: true,
    autoplay: {
        delay: 2500,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
        clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
    },
});


// header start /jquery 헤더 스크롤다운 시 사라짐
// $(function() { 
//     $(window).scroll(function() {
//     if ($(this).scrollTop() > 800) { 
//     $('#header').fadeOut();
//     } else {
//     $('#header').fadeIn();
//     }
// });
// $("#header").click(function() { 
//     $('html, body').animate({ scrollTop : 0 
//     }, 600, 'easeOutCubic');  
//     return false; 
// }); 
// });
// header end

