console.log("Hello From linker.js");
function testP(){
	var name=document.getElementById("uname").value
	if(name!=null){
		console.log(name);
		document.getElementById("date").innerHTML=Date();
	}
	var pyshell =  require('python-shell');
pyshell.run('python.py',  function  (err, results)  {
 	if  (err)  throw err;
 	console.log('python.py finished.');
 	console.log('results', results);
	});
}