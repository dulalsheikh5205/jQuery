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

    /* part-4 
    $("div").animate({
        left: '500px',<!-- part-4 -->
        width: '+=150px', <!-- এখানে আগের 100px+ এখানে +150px মোট 250px width আছে, আবার ক্লিক করলে ততবার করে, বেড়ে width যুক্ত হবে, -->
        height: '+=150px'
        
    }); 

    */
   
    /* part-5 
    $("div").animate({
        // height: 'toggle' <!-- এখানে বাড়বে ও কমবে -->
        width: 'toggle' 
    });
    
    */

    /* part-6 */
    var moshiur = $("div"); <!-- variable ধরে, property, opacity and speed parameter change করা হয়েছে, -->
    moshiur.animate({height: '300px', opacity: '0.5'},'slow');
    moshiur.animate({width: '300px', opacity: '0.7'},'slow');
    moshiur.animate({height: '100px', opacity: '0.4'},'slow');
    moshiur.animate({width: '100px', opacity: '1'},'slow');
    

});

});