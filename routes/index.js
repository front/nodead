exports['/'] = function (req, res) {
  res.render('index', { title: 'NodeAd' });
};
exports['/article'] = function (req, res) {
  res.render('article', { title: 'Article' });
};
exports['/bar'] = function (req, res) {
  res.send('foo');
};