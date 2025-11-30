// var oneLinerJoke = require('one-liner-joke');
// console.log(oneLinerJoke.getRandomJoke());




const figlet = require('figlet');

figlet("Sima Singh", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data);
});
