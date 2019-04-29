var http = require('http');
var db = require('./db_config');
var weather = require('../controllers/weather');
var url = require('url');
var fs = require('fs');
var httpmsg = require('./httpMsg');
var qs = require('querystring');

http.createServer(function (req,res) {
	
	switch(req.method){
		case 'GET':
					if(req.url === '/'){
						console.log(1)
						fs.readFile('views/index.html',function(err,data){
							if(err){
								httpmsg.send500(req,res,err,'HTML');
							}else if(data){
								res.writeHead(200,'Success',{'Content-Type': 'text/html'});
								res.write(data);
								res.end();
							}
						});
					}else{
						res.end();
					}
					break
		case 'POST':
					// console.log(req)
					if(req.url === '/weather'){
						var rbody =''
						req.on('data',function(data){
							rbody += data
							if(rbody.length > 1e7)//10 MB
								{
									httpmsg.send413(req,res);
								}
						});
						req.on('end',function(){
							var POST = qs.parse(rbody);
							weather.get(req,res,POST.city);
						})
						// res.end();
					}
					
					break			
		default:
				break			
	}

}).listen(db.port,function(){
	console.log('server started at port: '+db.port)
});