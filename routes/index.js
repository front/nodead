exports['/'] = function (req, res) {
  res.render('index', { title: 'NodeAd' });
};

exports['/article'] = function (req, res) {
  res.render('article');
};

exports['/log'] = function (req, res) {
  res.render('log', { title: 'Logger' });
};
