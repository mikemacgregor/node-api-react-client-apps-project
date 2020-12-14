const Player = require('../models/player');

exports.index = async (req, res, next) => {
    try {
        const players = await Player.find();
        res.status(200).json(players);
    } catch (error) {
        next(error);
    }
}

// exports.show = async (req, res, next) => {}

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
        res.status(200).json({message: 'Player added', status: 'success', player: player});
    } catch (error) {
        next(error);
    }
}

// exports.update = async (req, res, next) => {}

// exports.destroy = async (req, res, next) => {}