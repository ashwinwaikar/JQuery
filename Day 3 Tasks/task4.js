// 4.  Create P tag with some information on button click it should remove tag from page
console.log("this is task 4");

$(document).ready(function () {
    $("#button").click(function () {
        $("#para").remove();
    });
});