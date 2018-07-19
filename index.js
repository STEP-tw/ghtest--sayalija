let printHelloWorld = function() {
  console.log("Hello World...!");
};

let getISODate = function() {
  dateobj = new Date('July 15, 2018 05:35:32');
  console.log(dateobj.toISOString());
};

printHelloWorld();
getISODate();
