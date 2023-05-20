$(document).ready(function(){
    $(".moshiur").click(function(){
        $(".lorem").slideDown(2000);  <!-- class ".moshiur" কে ধরে, click করলে, lorem class ".lorem" এর slideDown(2000) 2 second সময় নিয়ে slide নিচে নামবে, -->
    });

    $("button").click(function(){
        $(".lorem").stop();   <!-- button কে ধরে, click করলে, lorem class ".lorem" এর stop() method এর stop buttn এ click করলে lorem 'slideDown()' হওয়া stop হয়ে যাবে, -->
    });
});


