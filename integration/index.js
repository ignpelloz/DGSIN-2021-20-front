// TODO: why two backends ? this seems to be older (18-19)

app.get(BASE_API_PATH + "/data", function(req,res) {
  console.log("INFO: New GET request to /data");
  res.send([2,3,4,1,2,7,13,8,4,29,1]);
});

var requet = require('request');
var apiServerHost = "http://dgsin1819-xx.herokuapp.com";

app.user("/proxyXX", (req,res) => {
  var url = apiServerHost + req.url;
  console.log("piped: " + req.baseUrl + req.url);
  req.pipe(request(url)).pipe(res);
});


// TODO: this goes to the index.js of the app that's in heroku
