// 3. Create a list of fruits and a radio buttons showing fruits name which ever radio is clicked that fruit 
// name should be add to list
console.log("this is task 3");

$(document).ready(function () {
    $("input").click(function () {
        var fruitName = $("input:checked").val();
        $("ol").append("<li>" + fruitName + "</li>");
    });
});