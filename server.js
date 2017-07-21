var express = require('express');
var fs = require('fs');
var app = express();

app.listen(80);
app.use('/', express.static('./statics'));

app.get('/', function(req, res){
	fs.readFile('index.html', function(err, data){
		if(!err){
			res.send(data.toString());
		}
		else {
			res.status(505);
		}
	})
})