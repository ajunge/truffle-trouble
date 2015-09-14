var welcome_string = "Hello from Truffle!";
console.log(welcome_string);

var example = Example.at(Example.deployed_address);
console.log(example);

example.set(42)
.then (function(tx){
	console.log("Setted");
	console.log(tx);
})
.catch(function(e) {
	console.log(e);
})
.done();

