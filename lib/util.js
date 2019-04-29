
exports.createHtml = function(data){
    var flag = data.sys.country.toLowerCase();
var x =''+
'<!DOCTYPE html>'+
'<html>'+
'<head>'+
	'<title>Report</title>'+
	'<!-- Font Awesome -->'+
	'<link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.8.1/css/all.css">'+
	'<!-- Bootstrap core CSS -->'+
	'<link href="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/css/bootstrap.min.css" rel="stylesheet">'+
	'<!-- Material Design Bootstrap -->'+
	'<link href="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.7/css/mdb.min.css" rel="stylesheet">'+
	'<!-- JQuery -->'+
	'<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/jquery/3.3.1/jquery.min.js"></script>'+
	'<!-- Bootstrap tooltips -->'+
	'<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.4/umd/popper.min.js"></script>'+
	'<!-- Bootstrap core JavaScript -->'+
	'<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/twitter-bootstrap/4.3.1/js/bootstrap.min.js"></script>'+
	'<!-- MDB core JavaScript -->'+
	'<script type="text/javascript" src="https://cdnjs.cloudflare.com/ajax/libs/mdbootstrap/4.7.7/js/mdb.min.js"></script>'+
'</head>'+
'<body>'+
	'<div class="container">'+
		'<div style="margin-top: 5px;">'+
			'<p class="h4 mb-4" style="color: #d26c22;">Weather in your city</p>'+
		'</div>'+
		'<div class="forecast-container" style="border-radius: 5px;background-color: #343a40;">'+
			'<div class="today forecast">'+
				'<div class="forecast-header">'+
					'<div class="day"></div>'+
					'<div class="date"></div>'+
				'</div> <!-- .forecast-header -->'+
				'<div class="forecast-content" style="margin: 10px; padding-bottom: 10px;">'+
					'<div class="location" style="color:white">'+
						' '+data.name+', '+data.sys.country+'  '+
						'<img src="http://openweathermap.org/images/flags/'+flag+'.png">'+
					'</div>'+
					'<div class="degree">'+
						'<div class="num" style="color:white">'+data.main.temp+'<sup>o</sup>C</div>'+
						'<div class="forecast-icon">'+
							'<img src="https://demo.themezy.com/system/resources/demo_themes/000/000/128/images/icons/icon-1.svg" alt="" width="90">'+
						'</div>'+
					'</div>'+
					'<!-- <span><img src="images/icon-umberella.png" alt="">20%</span>'+
					'<span><img src="images/icon-wind.png" alt="">18km/h</span>'+
					'<span ><img src="images/icon-compass.png" alt="">East</span>-->'+
				'</div>'+
			'</div>'+
			
		'</div>'+
		'<div>'+
		'</div>'+
		'<div>'+
			// '<a href="/views/index.html">Home</a>'+
		'</div>'+
	'</div>'+
	'<link rel="stylesheet" href="../public/stylesheets/style.css">'+
'</body>'+
'</html>';
return x;
}
