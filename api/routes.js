module.exports = router => {
  require('./routes/yahoo')(router);
  require('./routes/users')(router);
  require('./routes/sessions')(router);
  require('./routes/players')(router);

  return router;
};