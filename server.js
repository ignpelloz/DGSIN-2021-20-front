const express = require('express');
const app = express();

app.use(express.static('./dist/dgsin-expenditures-front')); // TODO


app.get('/*', function(req,res) {
  res.sendFile('index.html',{root:'dist/dgsin-expenditures-front/'})
});

app.listen(process.env.PORT || 8080)
