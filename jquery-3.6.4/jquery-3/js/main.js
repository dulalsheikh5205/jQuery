$(document).ready(function(){
    

    $('button').click(function(){ 
    // $('.lorem').click(function(){
        // $('p').hide(); <!-- tag ধরতে হয় quot এর মধ্যে tag দিয়ে -->
        // $('.lorem').hide(); <!--class ধরতে হয় quot এর  মধ্যে ডট দিয়ে -->
       // $('#lorem').hide(); <!-- id ধরতে হয় quot এর  মধ্যে # দিয়ে -->

     //  $('*').hide(); <!-- * ধরতে হয় সব tag একসাথে ধরার জন্য -->

        // $('button').hide(); <!-- button ধরার জন্য button ই hide হয়ে যাবে -->
        // $(this).hide(); <!-- this দিয়ে এখানে প্রথম selector কে ধরা বোঝাবে, -->
        // $(':button').hide(); <!-- button ধরার জন্য button ই hide হয়ে যাবে -->


        // $('p').hide(); <!-- এখানে সব p tag গুলা hide হয়ে যাবে  -->
        // $('p.name').hide(); <!-- এখানে p tag এর সব name class  গুলা hide হয়ে যাবে  -->
        // $('p:first').hide(); <!-- এখানে p tag এর প্রথম tag hide হয়ে যাবে  -->
        // $('p:last').hide(); <!-- এখানে p tag এর last tag hide হয়ে যাবে  -->



        // $('ul li:first').hide();  <!-- এখানে ul tag এর li এর প্রথম li tag hide হয়ে যাবে  -->
        // $('ul li:first-child').hide(); <!-- এখানে ul tag এর প্রত্যেক li এর প্রথম li tag hide হয়ে যাবে  -->
        // $('ul li:last').hide();
        // $('ul li:last-child').hide();
        // $('ul li:nth-child(2)').hide(); <!-- এখানে ul tag এর প্রত্যেক li এর কত তম  li tag hide হবে সেটার জন্য :nth-child() use করা হয়,  -->



        // $('a').hide();  <!-- এখানে a link tag hide করার জন্য -->
        // $('[href]').hide(); <!-- এখানে a link tag hide করার জন্য -->
        $('[target="_blank"').hide(); <!-- এখানে a link tag শুধু target attribute tag টা hide করার জন্য -->




    });
});