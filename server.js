const express = require('express');
const app = express();

app.use(express.static('./dist/dgsin-contacts-front')); // Has to be consistent with what is in package.json


app.get('/*', function(req,res)) {
  res.sendFile('index.html',{root:'dist/dgsin-contacts-front/'})
});

app.listen(process.env.PORT || 8080)

// After this have to update package.json: change 'ng serve' (start script) to 'node server.js'
// Also, add '--prod' to the build script

// At this point, ready to push to heroku
