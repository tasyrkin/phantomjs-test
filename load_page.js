var page = require('webpage').create(),
    system = require('system'),
    page_address;
var fs = require('fs');

if (system.args.length === 1){
  console.log('Usage: phantomjs ' + system.args[0] + ' <page_to_load:http://www.google.com>');
  phantom.exit();
}
page_address = system.args[1]

page.onResourceError = function(resourseError){
  page.reason = resourseError.errorString;
  page.reason_url = resourseError.url;
};

page.open(page_address, function(status){
    if (status === 'success' ){
      var destination_file = 'load_page_result.html';
      console.log('Successfully loaded url [' + page_address + ']');
      fs.write(destination_file, page.content, 'w')
      console.log('Successfully written content into [' + destination_file + ']');
      phantom.exit( 0 );
    } else {
      console.log( 'Error opening url [' + page.reason_url + '], reason: [' + page.reason + ']' );
      phantom.exit( 1 );
    }
});
