var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config()

/* GET users listing. */
router.get('/', function(req, res, next) {
  auth = 'Bearer '+ process.env.Auth
  if (process.env.AuthType == "Basic"){
    console.log("Basic Auth")
    axios.get('https://'+process.env.Domain+'/api/v2/tickets', {
    auth: {
      username: process.env.email,
      password: process.env.password
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.status(400)
    res.send(error);
  });
  }
  if (process.env.AuthType == "Token"){
    console.log("Token Auth")
    axios.get('https://'+process.env.Domain+'/api/v2/tickets', {
    headers: {Authorization: auth
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.status(400)
    res.send(error);
  });
  }
  
});

module.exports = router;
