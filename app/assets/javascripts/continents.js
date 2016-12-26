$(document).on("ready", function() {
    console.log("-- Page Load --");
  
  $(document).on('cocoon:before-insert', 'form', function(e,region_to_be_added) {
    console.log(region_to_be_added);
    console.log("Regions - before-insert");
    e.stopPropagation();
    region_to_be_added.fadeIn('slow');
  });
  $(document).on('cocoon:after-insert', 'form', function(e,region_to_be_added) {
    console.log(region_to_be_added);
    console.log("Regions - after-insert");
    e.stopPropagation();
    region_to_be_added.fadeIn('slow');
  });


  $('.regions').on('cocoon:before-remove', function(e, region_to_remove) { 
    console.log("Remove Region");
    $(this).data('remove-timeout', 1000); 
    region_to_remove.fadeOut('slow'); 
    e.stopPropagation();
    });
    
  $('.countries').on('cocoon:before-remove', function(e, country_to_remove) { 
    console.log("Remove Country");
    $(this).data('remove-timeout', 1000); 
    country_to_remove.fadeOut('slow'); 
    e.stopPropagation();
  });


});
  
// - trash

    // $('#owner').bind("cocoon:after-remove", 
    //       function() { 
    //         $("#owner_from_list").show(); 
    //         $("#owner a.add_fields").show(); 
    //         }); 
