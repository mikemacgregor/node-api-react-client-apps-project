// import the library
const YahooFantasy = require('yahoo-fantasy');

require('dotenv').config();

// you can get an application key/secret by creating a new application on Yahoo!
const yf = new YahooFantasy(
    process.env.YAPPLICATION_KEY, // Yahoo! Application Key
    process.env.YAPPLICATION_SECRET, // Yahoo! Application Secret
    app.tokenCallback, // callback function when user token is refreshed (optional)
    "https://[MY_APP_URL]/auth/yahoo/callback" // redirect endpoint when user authenticates (optional)
  );

  app.get(
    "/auth/yahoo",
    (req, res) => {
      app.yf.auth(res);
    }
  );
  
  app.get("/auth/yahoo/callback", (req, res) => {
    app.yf.authCallback(req, (err) => {
      if (err) {
        return res.redirect("/error");
      }
  
      return res.redirect("/");
    });
  });

exports.index = async (req, res, next) => {
    try {

        const yahoo = yf.game.meta (
            328,
            function cb(err, data) {
              // handle error
              // callback function
              // do your thing
              res.status(200).json(yahoo);
            }
          );


        
    } catch (error) {
        console.error(error);
        next(error);
    }
}

exports.show = async (req, res, next) => {
    try {
      const { id } = req.params;
      // console.log(req.params);
      let player = await Player.findById( id );
      res.status(200).json(player);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };