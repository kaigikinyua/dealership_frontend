var cp=require('child_process');
function testP(){
	//var name=document.getElementById("uname").value
	//if(name!=null){
	//	console.log(name);
	//	document.getElementById("date").innerHTML=Date();
	//}
	var pProg=cp.spawn('python',['python.py']);
	pProg.stdout.on('data',(data)=>{
		console.log(`${data}`);
		document.getElementById("date").innerHTML=`${data}`;
	});
}