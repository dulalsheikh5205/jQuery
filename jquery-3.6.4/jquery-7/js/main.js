$(document).ready(function(){

    $(".btn").click(function(){
        // $(".lorem").slideDown(); <!--  '.btn' কে ধরে, click করলে, div '.lorem' class এর slideDown() এর উপর থেকে নিচে নামবে slowly  -->
        $(".lorem").slideDown(2000); <!--  '.btn' কে ধরে, click করলে, div '.lorem' class এর slideDown() এর উপর থেকে নিচে নামবে slowly, speed parameter 2 second নিয়ে নামবে -->
    });

});