
var spawn = require('child_process').spawn;
var cp = spawn("node", ["external_process"]);

cp.stdout.on("data",function(data){
    console.log(data.toString());
})

setInterval(function(){
    cp.stdin.write("!!!!!")
   
},4000);

cp.on("close",function(){
    console.log("Good Bye Beauty");
    process.exit();
})

