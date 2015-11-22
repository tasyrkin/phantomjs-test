var page = require('webpage').create(),
    system = require('system'),
    page_address;
var fs = require('fs');

if (system.args.length === 1){
  console.log('Usage: phantomjs ' + system.args[0] + ' <page_to_load:http://www.google.com>');
  phantom.exit();
}
page_address = system.args[1]

page.open(page_address, function(status){
    console.log('Status:' + status);
    if (status === 'success' ){
      fs.write('load_page_result.html', page.content, 'w')
    }
    phantom.exit();
});
