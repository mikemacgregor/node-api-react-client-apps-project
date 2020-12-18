const passport = require('passport');
const { 
    index, 
    show, 
    // search, 
    create, 
    update, 
    destroy
} = require('../controllers/players');

module.exports = (router) => {
  router.get('/players', passport.authenticate('jwt', { session: false }), index);
  router.get('/players/:id', passport.authenticate('jwt', { session: false }), show); // 
  // router.get('/players/search', passport.authenticate('jwt', { session: false }), search);
  router.post('/players', passport.authenticate('jwt', { session: false }), create);
  router.post('/players/update', passport.authenticate('jwt', { session: false }), update);
  router.post('/players/delete', passport.authenticate('jwt', { session: false }), destroy);
};