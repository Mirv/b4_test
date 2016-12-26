$(document).on("ready", function() {
    console.log("-- Page Load --");
  
  $(document).on('cocoon:before-insert', 'form', function(e,field_to_be_added) {
    console.log(field_to_be_added);
    console.log("field add - before-insert");
    e.stopPropagation();
    field_to_be_added.fadeIn('slow');
  });
  $(document).on('cocoon:after-insert', 'form', function(e,field_to_be_added) {
    console.log(field_to_be_added);
    console.log("field add - after-insert");
    e.stopPropagation();
    field_to_be_added.fadeIn('slow');
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
