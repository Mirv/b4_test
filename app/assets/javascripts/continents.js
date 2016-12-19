$(document).ready(function() {
    console.log("-- Page Load --");
  
  $('.regions').bind('cocoon:before-insert', function(e,region_to_be_added) {
    console.log(region_to_be_added);
    console.log("Regions");
    alert(".regions");
    e.stopPropagation();
    region_to_be_added.fadeIn('slow');
  });

  $('.countries').bind('cocoon:before-insert', function(e,country_to_be_added) {
    console.log(country_to_be_added);
    console.log("Countries");
    e.stopPropagation();
    country_to_be_added.fadeIn('slow');
  });
  
    $('#tasks').bind('cocoon:before-insert', function(e,task_to_be_added) {
    console.log(task_to_be_added);
    task_to_be_added.fadeIn('slow');
  });
});