(function () {

    'use strict';

    // define variables
    var items = document.querySelectorAll(".roadmap__item");

    // check if an element is in viewport
    // http://stackoverflow.com/questions/123999/how-to-tell-if-a-dom-element-is-visible-in-the-current-viewport
    function isElementInViewport(el) {
        var rect = el.getBoundingClientRect();
        return (
            rect.top >= 0 &&
            rect.left >= 0 &&
            rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
            rect.right <= (window.innerWidth || document.documentElement.clientWidth)
        );
    }

    function callbackFunc() {
        for (var i = 0; i < items.length; i++) {
            if (isElementInViewport(items[i])) {
                items[i].classList.add("in-view");
            }
        }
    }

    // listen for events
    window.addEventListener("load", callbackFunc);
    window.addEventListener("resize", callbackFunc);
    window.addEventListener("scroll", callbackFunc);

})();

$(function () {
    var btn = $('.menu__burger'),
        menu = $('.menu--main');
    btn.on('click', function () {
        menu.hasClass('open')
            ? menu.removeClass('open')
            : menu.addClass('open')
    })
});


function digitalWatch() {
    var second = 1000,
        minute = 60 * second,
        hour = 60 * minute;

    var dateStart = new Date('June 10, 2018 16:00:00').getTime(),
        dateNow = new Date().getTime(),
        dateDiff = Math.abs(dateNow - dateStart);

    var countHours = Math.floor(dateDiff / hour),
        countMinutes = Math.floor((dateDiff % hour) / minute),
        countSeconds = Math.floor((dateDiff % minute) / second);

    if (countHours < 10) countHours = "0" + countHours;
    if (countMinutes < 10) countMinutes = "0" + countMinutes;
    if (countSeconds < 10) countSeconds = "0" + countSeconds;
    document.getElementById("digital_watch").innerHTML = '<span>' + countHours + '<small>hours</small></span>:<span>' + countMinutes + '<small>minutes</small></span>:<span>' + countSeconds + '<small>seconds</small></span>';
}

$(document).ready(function () {
    setInterval(function () {
        digitalWatch()
    }, 1000);
});
