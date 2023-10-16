const express = require("express");
const bodyParser = require("body-parser");
const connect = require('./db'); 
const router = require("./routes");
const app = express();
const PORT = 3000;
app.use(bodyParser.json());
app.use('/', router);

console.log('hiii');
connect()
  .then(() => {
    app.listen(PORT, () => {
      
      console.log(`Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error('Error connecting to the database:', error);
  });
