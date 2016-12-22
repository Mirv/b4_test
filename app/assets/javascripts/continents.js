$(document).ready(function() {
    console.log("-- Page Load --");
  
  $('.regions').bind('cocoon:before-insert', function(e,region_to_be_added) {
    console.log(region_to_be_added);
    console.log("Regions");
    e.stopPropagation();
    region_to_be_added.fadeIn('slow');
  });

  $('.countries').bind('cocoon:after-insert', function(e,country_to_be_added) {
    console.log(country_to_be_added);
    console.log("Countries");
    e.stopPropagation();
    country_to_be_added.fadeIn('slow');
  });

  var jqueryObject = $('btn');
  var rawDOMElement = jqueryObject.get(0);
  
  // var eventObject = $._data(rawDOMElement, 'events');
  // if(eventObject != undefined && eventObject.click != undefined)
  // {
  //   console.log('Click event already exists' + jqueryObject)
  // }
  // else
  // {
  //   console.log('Not duplicate')
  // }
});
  
