const { 
    index, 
    // show, 
    // search, 
    create, 
    // update, 
    // destroy
} = require('../controllers/players');

module.exports = router => {
  router.get('/players', index);
  // router.get('/players/:id', show);
  // router.get('/players/search', search);
  router.post('/players', create);
  // router.post('/players/update', update);
  // router.post('/players/delete', destroy);
};