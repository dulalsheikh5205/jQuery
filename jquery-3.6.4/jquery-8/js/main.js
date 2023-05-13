$(document).ready(function(){

    $("button").click(function(){
        // $("div").animate({left: '200px'});<!--  'button' কে ধরে, click করলে, div tag এর animate() left থেকে 200px সরে ডান দিকে যাবে, -->
        $("div").animate({
            left: '500px',
            width: '200px',
            height: '200px',
            opacity: '0.5'
        });  
    });

});