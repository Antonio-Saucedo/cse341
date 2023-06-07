const express = require('express');
const router = express.Router();

// req.isAuthenticated is provided from the auth router
router.get('/', (req, res) => {
  console.log(req.oidc.isAuthenticated());
  res.render('index', {
    title: 'Valheim Info API',
    isAuthenticated: req.oidc.isAuthenticated()
  });
});

router.use('/', require('./swagger'));
router.use('/', require('./valheim'));

module.exports = router;
