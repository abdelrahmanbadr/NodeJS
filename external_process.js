var interval = setInterval(function(){
process.stdout.write("Hello Beauty \n")
},2000)

process.stdin.on('data',function(data){
    console.log("data received: "+data);
    process.exit();
})


