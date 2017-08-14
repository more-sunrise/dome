var express = require('express');
var app = express();
var index = require('./routes/index.js');


app.use(express.static(__dirname));
app.get('/show',index.show);

app.listen(80,function(){
	console.log("server create success")
});