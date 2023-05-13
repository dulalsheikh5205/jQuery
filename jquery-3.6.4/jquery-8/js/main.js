$(document).ready(function(){

    $("button").click(function(){
        // $("div").animate({left: '200px'});<!--  'button' কে ধরে, click করলে, div tag এর animate() left থেকে 200px সরে ডান দিকে যাবে, -->
        
        /*
         $("div").animate({
             left: '500px',
              width: '200px', <!-- part-2 -->
              height: '200px',
              opacity: '0.5'
         }); 
        */ 

       /* part-3 
       $("div").animate({
        left: '500px',
        width: '150px', <!-- part-3 -->
        height: '150px'
        
    }); 
    
    */

    /* part-4 */
    $("div").animate({
        left: '500px',<!-- part-4 -->
        width: '+=150px', <!-- এখানে আগের 100px+ এখানে +150px মোট 250px width আছে, আবার ক্লিক করলে ততবার করে, বেড়ে width যুক্ত হবে, -->
        height: '+=150px'
        
    }); 

});

});