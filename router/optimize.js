const express = require('express');
const router = express.Router();

const Kraken = require('kraken');
 
const kraken = new Kraken({
    api_key: '412cf1962beb84affff0ab7b8f1076a1',
    api_secret: '9bae4796d1928ce503b351920799f8524a3495db'
});



router.post('/', function(req, res, next) {
    const {image_link} = req.body

    var opts = {
        url: image_link,
        wait: true
    };
     
    kraken.url(opts, function(err, data) {
        if (err) {
            console.log('Failed. Error message: %s', err);
            res.send(err)
        } else {
            console.log('Success. Optimized image URL: %s', data.kraked_url);
            res.send({kraked_url:data.kraked_url})
        }
    });

 
});


module.exports = router;