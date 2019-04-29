
var httpmsg = require('../core/httpMsg')
var request = require('request')

exports.get = function(req,res,reqbody){
	if(reqbody != null && reqbody != undefined){
		var API_URL = 'http://api.openweathermap.org/data/2.5/weather';
		var API_KEY = 'cce54bd2f32dfbea3a608858a2cd7995';
		try{
			var googleApi = `${API_URL}?q=${reqbody}&lang=en&units=metric&APPID=${API_KEY}`;
			// console.log(googleApi)
			request(googleApi,function(err,response,body){
				if(err){
					// console.log(err)
					httpmsg.send404(req,res,'HTML');
				}else{
					// console.log(JSON.parse(body))
					httpmsg.send200(req,res,JSON.parse(body),'html');
				}
			});
			
		}catch(error){
			throw error
		}
	}else{
		httpmsg.send406(req,res,'HTML');
	}
}
