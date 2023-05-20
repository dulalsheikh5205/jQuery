/*
$(document).ready(function(){
    $("button").click(function(){
        // $("p").hide();
        $("p").hide('slow',function(){ <!-- এখানে slow হচ্ছে speed parameter আর function হচ্ছে callback parameter -->
            alert("Moshiur");
        });
    });
});

*/

$(document).ready(function(){
    $("button").click(function(){ 
        // $("p").hide();
        $("p").hide(2000); <!-- এখানে আগে alert দিবে তারপর p tag hide হবে  -->
            alert("Moshiur");
        });
});

/* দুই টা এর মধ্যে difference হল, call back functin parameter দিয়ে hide করলে , button এ click করলে আগে hide হবে p tag, তারপর alert দিবে, আর শুধু hide() method দিয়ে করলে এখানে আগে alert দিবে তারপর p tag hide হবে  */