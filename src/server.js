var port = 8888;

var path = require('path');
var url = require('url');
var express = require('express');
var webpack = require('webpack');
var config = require('../webpack.config.dev');

var app = express();
var compiler = webpack(config);

var index = require('../node_modules/hearthstone-db/index.js');

app.use(require('webpack-dev-middleware')(compiler, {
  noInfo: true,
  publicPath: config.output.publicPath
}));

app.use(require('webpack-hot-middleware')(compiler));

app.get('/api/tussi', function(req, res, next) {

    res.send([
        'World',
        'testi',
        '!!!',
        'Jussi',
    ]);

});

app.get('/api/cards', function(req, res, next) {

        res.send(index.allCollectibles);
});

app.get('*', function(req, res, next) {
  res.sendFile(path.join(__dirname, '/../web/index.dev.html'));
});


app.listen(port, 'localhost', function(err) {
  if (err) {
    console.log(err);
    return;
  }

  console.log('Listening at http://localhost:' + port);
});


