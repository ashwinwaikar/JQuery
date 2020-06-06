// 1. Create a button,  on click it should display image and if you click again it should hide image
console.log("this is task 1");

$(document).ready(function () {
    $("#button").click(function () {
        $("#image").toggle();
    });
});