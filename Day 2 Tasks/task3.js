// 3. Create a button on button click your name which is written in h3 tag will slide up and then it will slide
//  down  
console.log("this is task 3");

$(document).ready(function () {
    $("#button").click(function () {

        // $("h3").slideUp("slow");
        // $("h3").slideDown("slow");
        // or
        $("h3").slideUp("slow").slideDown("slow");

    })
})