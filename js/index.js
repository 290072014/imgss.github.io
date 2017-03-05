var div = document.querySelector('section .row');
var upBotton = document.querySelector('.up-down i');
window.onload = function() {
    var spanArr = document.querySelectorAll('.row span');
    var spanArr = Array.prototype.slice.call(spanArr);
    spanArr.forEach(function(span, i) {
        setTimeout(function() {
            span.className = 'animated fadeIn';
        }, (i + 1) * 800);
    });
}
document.addEventListener('mousewheel', wheelHandler);

function wheelHandler(e) {
    e.wheelDelta > 0 ? slideTo('0px') : slideTo('-300px');
}
upBotton.addEventListener('click', clickHandler);

function clickHandler() {
    if(document.querySelector(".wrapper").style.transform !== "translateY(-300px)") {
        slideTo('-300px');
        upBotton.style.transform = 'rotate(180deg)';

    } else {
        slideTo('0px');
        upBotton.style.transform = 'rotate(0deg)';
    }

}
// div.addEventListener('mouseover', function(e) {
//     e.stopPropagation();
//     if (e.target.nodeName == 'A') {
//         e.target.nextSibling.className = 'animated fadeIn';
//     };
// });
// div.addEventListener('mouseout', function(e) {
//     e.stopPropagation();
//     if (e.target.nodeName == 'A') {
//         e.target.nextSibling.className = '';
//     };
// });



function slideTo(px) {
    document.querySelector(".wrapper").style.transform = 'translateY(' + px + ')';

};

function getMargin() {
    var slider = document.querySelector(".page-header>div");
    var base = parseInt(getComputedStyle(slider, null)['margin-top']);
    return base;

}