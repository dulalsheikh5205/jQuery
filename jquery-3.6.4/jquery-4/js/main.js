$(document).ready(function(){

    // $("p").click(function(){ <!-- কোন event use করবো, অবশ্যই event এর মধ্যে function থাকবে, -->

    //     $(this).hide();
    // });

    // $("p").dblclick(function(){ <!-- কোন dblclick use করলে, double click করতে হবে, -->

    //     $(this).hide();
    // });

    // $("p").mouseenter(function(){ <!-- কোন mouseenter event use করলে, mouse উপরে নিয়ে গেলে hide হয়ে হবে, -->

    //     $(this).hide();
    // });

    // $("p").mouseenter(function(){ <!-- কোন mouseenter event use করলে, mouse উপরে নিয়ে গেলে alert হয়ে Hi দিবে, -->

    //     alert("Hi");
    // });

    // $("p").mouseleave(function(){ <!-- কোন mouseleave event use করলে, mouse উপরে নিয়ে গেলে leave করার সময় alert হয়ে Hi দিবে, -->

    //     alert("Hi");
    // });

    // $("p").hover(function(){ <!-- কোন hover event use করলে, mouse উপরে নিয়ে গেলে leave করার সময় alert হয়ে Hi দিবে, তারপর Bye দিবে, -->

    //     alert("Hi");
    // },
    // function(){
    //     alert("Bye");
    // });

    $("input").focus(function(){
        // $(this).css("background","#ccc");
        $(this).css("background","red"); <!-- কোন focus event use করলে, click করলে css color change হবে, -->

    });  

    // $("p").on("click",function(){
    //     $(this).hide();
    // });

    $("p").on({
        mouseenter: function(){
            $(this).css("background-color","red"); <!-- একাধিক event এভাবে যোগ করে {} এর পরে কমা দিয়ে add করতে হয়, -->
        },
        mouseleave: function(){
            $(this).css("background-color","green");
        },
        click: function(){
            $(this).css("background-color","yellow");
        }
    });

});