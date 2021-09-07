'use strict';

let noRoute = (req, res, next) => {
    res.status(404).send('No route found')
}

module.exports = noRoute