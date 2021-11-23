var express = require('express');
var router = express.Router();
const axios = require('axios');
require('dotenv').config()

/* GET users listing. */
router.post('/', function(req, res, next) {
  auth = 'Bearer '+ process.env.Auth
  var id = req.body.ticketId
  var url = 'https://'+process.env.Domain+'/api/v2/tickets/'
  var url = url + id
  if (process.env.AuthType == "Basic"){
    console.log("Basic Auth")
    axios.get(url, {
      auth: {
        username: process.env.email,
        password: process.env.password
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
  }

  if (process.env.AuthType == "Token"){
    console.log("Token Auth")
    axios.get(url, {
      headers: {Authorization: auth
      }
    })
    .then(response => {
      res.send(response.data);
    })
    .catch(error => {
      res.send(error);
    });
  }
  
});

module.exports = router;
