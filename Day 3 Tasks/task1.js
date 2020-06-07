// 1. Create two text boxes and a buttons on click of button it should copy data from one text box to another
console.log("this is task 1");

$(document).ready(function () {
    $("#button").click(function () {
        var textbox1 = $("#textbox1").val();
        $("#textbox2").val(textbox1);
    });
});


// $(document).ready(function () {
//     $("#button").click(function () {
//         var ravi = $("#text").val();
//         $("$text1").val(ravi);
//     });
// });