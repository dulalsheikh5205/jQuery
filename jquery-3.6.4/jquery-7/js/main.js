$(document).ready(function(){

    $(".btn").click(function(){
        // $(".lorem").slideDown(); <!--  '.btn' কে ধরে, click করলে, div '.lorem' class এর slideDown() এর উপর থেকে নিচে নামবে slowly  -->
        // $(".lorem").slideDown(2000); <!--  '.btn' কে ধরে, click করলে, div '.lorem' class এর slideDown() এর উপর থেকে নিচে নামবে slowly, speed parameter 2 second নিয়ে নামবে -->
        // $(".lorem").slideUp(); <!--  '.btn' কে ধরে, click করলে, div '.lorem' class এর slideUp() এর নিচ থেকে উপরে উঠবে slowly -->
        // $(".lorem").slideUp(2000); <!--  '.btn' কে ধরে, click করলে, div '.lorem' class এর slideUp() এর নিচ থেকে উপরে উঠবে slowly, speed parameter 2 second নিয়ে উপরে উঠবে -->
        $(".lorem").slideToggle(2000); <!--  '.btn' কে ধরে, click করলে, div '.lorem' class এর slideToggle() এর নিচ থেকে উপরে উঠবে এবং নামবে slowly, speed parameter 2 second নিয়ে উপরে উঠবে ও নামবে -->
    });

});