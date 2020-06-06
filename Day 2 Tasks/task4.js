// 4. Create image on page, on button click, size of image will slowly increase
console.log("this is task 4");

$(document).ready(function () {
    $("#button").click(function () {
        $("#image").animate({
            height: "400px",
            width: "650px"
        }, "slow");
    });
});