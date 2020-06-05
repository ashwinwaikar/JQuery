// 4. Create a text box, on blur give grey color to textbox
console.log("this is task 4");

$(document).ready(function () {
    $("#textbox").blur(function () {
        $(this).css("background-color", "grey");
    })
});