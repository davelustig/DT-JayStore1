(function(){
    /* Change the width of each slide to auto when the pager is clicked.  
       This is needed because jQuery Cylces sets a fixed width on the image 
       every time the pager is clicked, and the slide won't crop and center
       correctly if a fixed width is applied.*/
    jQuery(document).ready(function(){ 
        jQuery(".views_slideshow_pager_field li").on("click", function() { 
            jQuery(".views_slideshow_cycle_slide").width('auto'); 
        });
    });
})();