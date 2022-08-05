
$("img").animate({ opacity: 0 });
setTimeout(function () {
    $("img").animate({ opacity: 1.5 });
}, 500);

// $("body").on("scroll", function () {
//     var posY = element.getBoundingClientRect().top;
//     if (posY > 200) {
//         $('.floating').addClass('past-main');
//     } else {
//         $('.floating').removeClass('past-main');
//     }
// });

function reveal() {
    var reveals = document.querySelectorAll(".reveal");
    for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 200;
        if (elementTop < windowHeight - elementVisible) {
            reveals[i].classList.add("active");
        } else {
            reveals[i].classList.remove("active");
        }
    }
}

document.addEventListener("scroll", reveal);
// To check the scroll position on page load
reveal();

// $("h1").hover(function(){
//     $(this).addClass("heading-thickness");
// }, function(){
//     $(this).removeClass("heading-thickness");
// });