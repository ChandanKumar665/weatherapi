
var util = require('../lib/util');

exports.send500 = function(req, res, err, httpMsgFormat='JSON'){
    if(httpMsgFormat === 'JSON'){
        res.writeHead(500,'Internal Error',{'content-type':'application/json'});
        res.write(JSON.stringify({status_code:500,message:err}));
        res.end();
    }else{
        res.writeHead(500,'Internal Error',{'Content-Type': 'text/html'});
        var html =  ''+
                    '<html>'+
                    '   <head>'+
                    '       <title>500</title>'+
                    '   </head>'+
                    '   <body>'+
                    '       <h4>500: Internal Error</h4>'+
                    '       <p>'+err+'</p>'+
                    '    </body>'+
                    '</html>';
        res.write(html);
        res.end();
    }
}

exports.send200 = function(req,res,data,httpMsgFormat='JSON'){
    if(httpMsgFormat === 'JSON'){
    res.writeHead(200,{'content-type':'application/json'});
    res.write(JSON.stringify({status_code:200,message:'success',result:data}));
    res.end();
    }else{
        res.writeHead(200,'Success',{'Content-Type': 'text/html'});
        var flag = data.sys.country.toLowerCase();
        var htm = util.createHtml(data);
        res.write(htm);
        res.end();
    }
}

exports.send404 = function(req,res,httpMsgFormat='JSON'){
    if(httpMsgFormat === 'JSON'){
    res.writeHead(404,{'content-type':'application/json'});
    res.write(JSON.stringify({status_code:404,message:'Resource not found.'}));
    res.end();
    }else{
        res.writeHead(500,'Resource not found',{'Content-Type': 'text/html'});
        var html =  ''+
                    '<html>'+
                    '   <head>'+
                    '       <title>404</title>'+
                    '   </head>'+
                    '   <body>'+
                    '       <h4>404: Resource not found.</h4>'+
                    '       <p>Content not available what you are lookking for.</p>'+
                    '    </body>'+
                    '</html>';
        res.write(html);
        res.end();
    }
}

exports.send405 = function(req,res,httpMsgFormat='JSON'){
    if(httpMsgFormat === 'JSON'){
    res.writeHead(405,'Method not supported',{'content-type':'application/json'});
    res.write(JSON.stringify({status_code:404,message:'Method not supported.'}));
    res.end();
    }else{
        res.writeHead(405,'Method not supported',{'Content-Type': 'text/html'});
        var html =  ''+
                    '<html>'+
                    '   <head>'+
                    '       <title>405</title>'+
                    '   </head>'+
                    '   <body>'+
                    '       <h4>405: Method not supported.</h4>'+
                    '       <p>Method not supported.</p>'+
                    '    </body>'+
                    '</html>';
        res.write(html);
        res.end();
    }
}

exports.send413 = function(req,res,httpMsgFormat='JSON'){
    if(httpMsgFormat === 'JSON'){
    res.writeHead(413,'Large Request',{'content-type':'application/json'});
    res.write(JSON.stringify({status_code:413,message:'Request entity is too large.'}));
    res.end();
    }else{
        res.writeHead(413,'Large Request',{'Content-Type': 'text/html'});
        var html =  ''+
                    '<html>'+
                    '   <head>'+
                    '       <title>413</title>'+
                    '   </head>'+
                    '   <body>'+
                    '       <h4>413: Request entity is too large.</h4>'+
                    '       <p>This might be due to request entity is too large.</p>'+
                    '    </body>'+
                    '</html>';
        res.write(html);
        res.end();
    }
}

exports.send406 = function(req,res,httpMsgFormat='JSON'){
    if(httpMsgFormat === 'JSON'){
    res.writeHead(406,'Invalid input',{'content-type':'application/json'});
    res.write(JSON.stringify({status_code:406,message:'Not acceptable input.'}));
    res.end();
    }else{
        res.writeHead(406,'Invalid input',{'Content-Type': 'text/html'});
        var html =  ''+
                    '<html>'+
                    '   <head>'+
                    '       <title>406</title>'+
                    '   </head>'+
                    '   <body>'+
                    '       <h4>406: Not acceptable input.</h4>'+
                    '       <p>This might be due to Not acceptable input.</p>'+
                    '    </body>'+
                    '</html>';
        res.write(html);
        res.end();
    }
}

