// 2. Create a paragraph, write 5 line about you. on mouse over hide paragraph and on mouse out show
//  paragraph
console.log("this is task 2");

$(document).ready(function () {
    $("#paragraph").mouseover(function () {
        $(this).hide("slow");
    })
});

$(document).ready(function () {
    $("#paragraph").mouseout(function () {
        $(this).show("slow");
    })
});