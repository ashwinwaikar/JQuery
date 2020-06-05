// 1. Create image and button onbutton click hide the image

console.log("this is task1");

$(document).ready(function () {
    $("#button").click(function () {
        $("#image").hide("slow");
    })
});
