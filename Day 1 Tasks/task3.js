// 3. Write your name in h1 tag with blue color on mouse enter it should display red border around it.
console.log("this is task 3");
$(document).ready(function () {
    $("#name").mouseover(function () {
        $(this).css({
            "border-color": "red",
            "border-width": "5px",
            "border-style": "solid",
            "border-radius": "50px"
        });
    })
});