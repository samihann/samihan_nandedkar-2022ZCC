var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.get('/', function(req, res, next) {
  axios.get('https://zccsamihann.zendesk.com/api/v2/tickets', {
    headers: {Authorization: 'Bearer'
    }
  })
  .then(response => {
    res.send(response.data);
    console.log(response)
  })
  .catch(error => {
    res.status(400)
    res.send(error);
  });
});

module.exports = router;
