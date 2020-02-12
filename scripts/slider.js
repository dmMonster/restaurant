$(document).ready(() => {

    let timeToNextSlide = 5000;

    $(".slide-next").click(() => {

        nextSlide();
    });

    function nextSlide() {
        let current = $(".slide-show").attr("id");
        let nextSlide = "";

        switch (current) {
            case "slide_1":
                nextSlide = "#slide_" + 2;
                break;
            case "slide_2":
                nextSlide = "#slide_" + 3;
                break;
            case "slide_3":
                nextSlide = "#slide_" + 1;
                break;

        }

        let currentSlide = $("#" + current);
        currentSlide.toggleClass("slide-show");

        currentSlide.fadeOut("fast", function () {
            $(nextSlide).fadeIn("fast");
            $(nextSlide).toggleClass("slide-show");

        });
    }

    setInterval(function () {
        nextSlide();
    }, timeToNextSlide);
});