$(document).on("ready", function() {
    console.log("-- Page Load --");
  
  $(document).on('cocoon:before-insert', 'form', function(e,region_to_be_added) {
    console.log(region_to_be_added);
    console.log("Regions before-insert");
    e.stopPropagation();
    region_to_be_added.fadeIn('slow');
  });
  $(document).on('cocoon:after-insert', 'form', function(e,region_to_be_added) {
    console.log(region_to_be_added);
    console.log("Regions after-insert");
    e.stopPropagation();
    region_to_be_added.fadeIn('slow');
  });

  $(document).on('cocoon:before-insert', '.regions', function(e,country_to_be_added) {
    console.log(country_to_be_added);
    console.log("Countries before-insert");
    e.stopPropagation();
    country_to_be_added.fadeIn('slow');
  });
  $(document).on('cocoon:after-insert', '.regions', function(e,country_to_be_added) {
    console.log(country_to_be_added);
    console.log("Countries after-insert");
    e.stopPropagation();
    country_to_be_added.fadeIn('slow');
  });

});
  
