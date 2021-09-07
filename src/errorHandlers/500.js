'use strict';

let errorHandler = (err, req, res, next) => {
    const errObject = {
        status: err.status || 500,
        messege: err.messege || err
    }
    res.status(errObject.status).send(errObject.messege)
}

module.exports = errorHandler