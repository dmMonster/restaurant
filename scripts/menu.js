$(document).ready(function () {
    $(".hamburger-menu").click(() => {

        $(".navigation-menu").toggleClass("navigation-fixed");
        $(".navigation-menu").slideToggle();
    });
});