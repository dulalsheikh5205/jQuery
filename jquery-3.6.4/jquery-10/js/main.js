$(document).ready(function(){
    $("button").click(function(){
        // $("p").hide();
        $("p").hide('slow',function(){ <!-- এখানে slow হচ্ছে speed parameter আর function হচ্ছে callback parameter -->
            alert("Moshiur");
        });
    });
});

