// 2. Create a image with border on mouse over it should remove border of the image
console.log("this is task 2");

$(document).ready(function () {
    $("#image").mouseenter(function () {
        $(this).css("border", "none");
    });
});