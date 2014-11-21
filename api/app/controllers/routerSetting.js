// Generated by CoffeeScript 1.8.0
(function() {
  exports.all = function(req, res, next) {
    res.set('Access-Control-Allow-Origin', 'http://lingyong.me');
    res.set('Access-Control-Allow-Credentials', true);
    res.set('Access-Control-Allow-Methods', 'GET,POST,DELETE,PUT');
    res.set('Access-Control-Allow-Headers', 'X-Requested-With, Content-Type, Authorization');
    if (req.method === 'OPTIONS') {
      return res.send(200);
    }
    return next();
  };

}).call(this);
