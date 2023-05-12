$(document).ready(function(){
    $("#hide").click(function(){
        // $("p").hide('slow');  <!-- #hide button কে, click করলে, p tag এর hide action এর slow speed parameter কাজ করবে, -->

        // $("p").hide('fast'); <!-- #hide button কে, click করলে, p tag এর hide action এর fast speed parameter কাজ করবে, -->
    });

    $("#show").click(function(){
        // $("p").show('slow'); <!-- #show button কে, click করলে, p tag এর show action এর slow speed parameter কাজ করবে, -->
        // $("p").show('fast'); <!-- #show button কে, click করলে, p tag এর show action এর fast speed parameter কাজ করবে, -->
    });

    $("button").click(function(){
        // $("p").toggle(); <!--  button কে ধরে, click করলে, p tag এর toggle action এর hide() show() 'দুইটা কাজ' একসাথে কাজ করবে, -->
        $("p").toggle(2000); <!--  button কে ধরে, click করলে, p tag এর toggle action এর hide() show() 'দুইটা কাজ' 2 second করে একসাথে কাজ করবে, -->
    });
})