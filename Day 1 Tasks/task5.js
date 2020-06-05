// 5. Create a text box when you type in it the color of text should be green
console.log("this is task 5");

$(document).ready(function () {
    $("#textbox").change(function () {
        $(this).css("color", "green");
    })
})