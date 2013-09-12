var http = require("http");
var ejs  = require('ejs');
var fs   = require("fs");

var server = http.createServer(function(request, response)
{
    var fsOptions = { "encoding":'UTF-8' };

    fs.readFile('./template.ejs', fsOptions, function(err, data)
    {
        var templateString = "";
        var ejsLocals = { "things" :
                            [
                                { "name": "thing 1", "price" : "$1.00" },
                                { "name": "thing 2", "price" : "$2.00" }
                            ]
                        }

        if(!err)
        {
            templateString = data;

        } else {

            console.log(err.message);
        }

        response.writeHead(200, { "Content-Type": "text/html"});
        response.end(ejs.render(templateString, { "locals": ejsLocals }));
    });

}).listen(8000);