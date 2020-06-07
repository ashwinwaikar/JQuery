// 5. Create radio buttons showing name of colors. Create a text area,  when user type text in text area it 
// should get the color as per radio button clicked .
console.log("this is task 5");

$(document).ready(function () {
    $("input").click(function () {
        var colorName = $("input:checked").val();
        $("#textarea").css("color", colorName);
    });
});