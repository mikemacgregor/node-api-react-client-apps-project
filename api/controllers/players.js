const Player = require('../models/player');
// const jwt = require('jsonwebtoken'); // only necessary if we are going to change the token as part of an action

exports.index = async (req, res, next) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
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

// exports.search = async (req, res, next) => {}

exports.create = async (req, res, next) => {
    try {
        const { firstName, lastName, position, team, espnId } = req.body;
        const player = await Player.create({
          firstName,
          lastName,
          position,
          team,
          espnId
        });
        res.status(200).json({message: 'Player added', status: 'success', player: player });
    } catch (error) {
        console.error(error);
        next(error);
    }
}

exports.update = async (req, res, next) => {
    try {
        const { _id, firstName, lastName, position, team, espnId } = req.body;
        const player = await Player.findOneAndUpdate( { _id: _id }, {
            firstName,
            lastName,
            position,
            team,
            espnId
        });

        res.status(200).json({ message: "Player updated", status: 'success', player: player });

    } catch (error) {
        console.error(error);
        next(error);
    }
};

exports.destroy = async (req, res, next) => {
    try {
      const { _id } = req.body;
      const player = await Player.findOneAndDelete({ _id: _id });
      res.status(200).json(player);
    } catch (error) {
      console.error(error);
      next(error);
    }
  };