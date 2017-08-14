var connect=require('./mysql.js');

//导出区域
function show(req,res){
var num = parseInt(req.query.num)||1;
var str = 'select * from area limit '+(num-1)*5+',5';
connect.query(str,function(err,data){
	console.log(err)
	var json = {}
	if(data=="[]"||data==""){
		json.msg ="没有更多数据了"
	}else{
		json.data = data;
	}
	res.json(json)
})
}

exports.show =show;
