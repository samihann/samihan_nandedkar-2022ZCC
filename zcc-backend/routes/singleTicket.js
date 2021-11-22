var express = require('express');
var router = express.Router();
const axios = require('axios');

/* GET users listing. */
router.post('/', function(req, res, next) {
  console.log(req.body.ticketId)
  var id = req.body.ticketId
  var url = 'https://zccsamihann.zendesk.com/api/v2/tickets/'
  var url = url + id
  axios.get(url, {
    headers: {Authorization: 'Bearer'
    }
  })
  .then(response => {
    res.send(response.data);
  })
  .catch(error => {
    res.send(error);
  });
});

module.exports = router;
