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



// tab start
const tabItem = document.querySelectorAll(".tab__item");
const tabContent = document.querySelectorAll(".tab__content");

    tabItem.forEach((item, index) => {

    item.addEventListener("click", (e) => {

        e.preventDefault(); // a 
        

        tabContent.forEach((content) => {
        content.classList.remove("active");
        });

        tabItem.forEach((content) => {
        content.classList.remove("active");
        });

        tabItem[index].classList.add("active");
        tabContent[index].classList.add("active");
    });
});
// tab end

// tab image change start

// tab image change end