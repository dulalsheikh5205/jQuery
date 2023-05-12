$(document).ready(function(){

    $("button").click(function(){
    //    $(".box1").fadeIn(); <!--  button কে ধরে, click করলে, div box1 class এর fadeIn() এর 'slow' and 5000 মিলি সেকেন্ড মানে ৫ সেঃ হচ্ছে speed parameter, আস্তে আস্তে কাজ করবে, -->
    //    $(".box2").fadeIn("slow");
    //    $(".box3").fadeIn(5000);

    //    $(".box1").fadeOut();
    //    $(".box2").fadeOut("slow");<!--  button কে ধরে, click করলে, div box1 class এর fadeOut() এর 'slow' and 5000 মিলি সেকেন্ড মানে ৫ সেঃ হচ্ছে speed parameter, আস্তে আস্তে কাজ করবে, -->
    //    $(".box3").fadeOut(3000);

    // $(".box1").fadeToggle();<!--  button কে ধরে, click করলে, div box1 class এর fadeTo এর slow হচ্ছে speed parameter, 0.3 হচ্ছে fadeTo() এর opacity  -->
    // $(".box2").fadeToggle("slow");
    // $(".box3").fadeToggle(1000);
    // })

    $(".box1").fadeTo('slow',0.3);<!--  button কে ধরে, click করলে, div box1 class এর fadeTo এর slow হচ্ছে speed parameter, 0.3 হচ্ছে fadeTo() এর opacity  -->
    $(".box2").fadeTo('slow',0.5);
    $(".box3").fadeTo('slow',0.7);
    })

});