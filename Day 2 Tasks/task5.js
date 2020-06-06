// 5. Create a paragraph on button click it should hide,
// once hidden it should display message done with hiding
console.log("this is task 5");

$(document).ready(function () {
    $("#button").click(function () {
        $("#paragraph").hide("slow", function () {
            $("#done").show("slow");
        });
    });
});