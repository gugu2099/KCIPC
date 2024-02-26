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


// header start /jquery
$(function() { // 보이기 | 숨기기
    $(window).scroll(function() {
    if ($(this).scrollTop() > 800) { //500 넘으면 버튼이 사라집니다. 
    $('#header').fadeOut();
    } else {
    $('#header').fadeIn();
    }
}); // 버튼 클릭시 
$("#header").click(function() { 
    $('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
    }, 600, 'easeOutCubic'); // 속도 400 
    return false; 
}); 
});
// header end

// top start /jquery
$(function() { // 보이기 | 숨기기
    $(window).scroll(function() {
    if ($(this).scrollTop() > 250) { //250 넘으면 버튼이 보여집니다.
    $('#topBtn').fadeIn();
    } else {
    $('#topBtn').fadeOut();
    }
}); // 버튼 클릭시 
$("#topBtn").click(function() { 
    $('html, body').animate({ scrollTop : 0 // 0 까지 animation 이동합니다. 
    }, 800, 'easeOutCubic'); // 속도 400 
    return false; 
}); 
});
// top end
