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
  router.get('/players', index);
  router.get('/players/:id', show); // , passport.authenticate('jwt', { session: false })
  // router.get('/players/search', passport.authenticate('jwt', { session: false }), search);
  router.post('/players', create);
  router.post('/players/update', update);
  router.post('/players/delete', destroy);
};