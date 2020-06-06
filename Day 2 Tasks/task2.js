// 2. Type your name in h1 tag when you put mouse over it your name should be fade out
console.log("this is task 2");

$(document).ready(function () {
    $("#h1tag").mouseover(function () {
        $(this).fadeOut("slow");
    });
});