const { 
    index, 
    show 
    // search, 
    // create, 
    // update, 
    // destroy
} = require('../controllers/yahoo');

module.exports = (router) => {
  router.get('/yahoo', index);
  router.get('/yahoo/:id', show); // 
  // router.get('/players/search', passport.authenticate('jwt', { session: false }), search);
  // router.post('/players', passport.authenticate('jwt', { session: false }), create);
  // router.post('/players/update', passport.authenticate('jwt', { session: false }), update);
  // router.post('/players/delete', passport.authenticate('jwt', { session: false }), destroy);
};