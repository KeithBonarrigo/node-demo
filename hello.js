var http = require('http');
var fs = require('fs');
var url = require('url');
const PORT = process.env.PORT || 5000;

http.createServer(function(req, res){
    var q = url.parse(req.url, true);
    console.log(q);
    var pathToPage = q.pathname;
    if(pathToPage == '/') { pathToPage = '/index'; }
    var fileToInclude = "."+ pathToPage + ".html";
    console.log(fileToInclude);

    fs.readFile(fileToInclude, function(err, data){
        if(err){ //error handling
            res.writeHead(404,{ 'Content-Type': 'text/html' });
            return res.end("File Not Found");
        } //end error handling
        res.writeHead(200,{ 'Content-Type': 'text/html' });
        res.write(data);
        return res.end();
    }); 
}).listen(PORT);
console.log('Node Server Running');