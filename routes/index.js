//Import modules.
const router = require('express').Router();
const apiRoutes = require('./api');

//Add api to the path.
router.use('/api', apiRoutes);

router.use((req, res) => {
  res.send("<h1>Wrong Route!</h1>")
});

//Export the routes.
module.exports = router;