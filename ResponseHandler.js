// Contains all the response manipulations and sending it
// var ShowableError = require(__BASE__ + "modules/Error/ShowableError");

var OKAY = 200;
var BAD_REQUEST = 400;
var UN_AUTHORIZED = 401;
var FORBIDDEN = 403;
var NOT_FOUND = 404;
var INTERNAL_ERROR = 500;

var sendOkay = function (response, result) {
    response.status(OKAY).json(result);
};

var sendBadRequest = function (response, result) {
    response.status(BAD_REQUEST).json(result);
};

var sendUnAuthorized = function (response, payload) {
    if (!payload) {
        payload = {
            success: false,
            message: "Unauthorized request"
        };
    } else {
        payload.success = false;
    }
    response.status(UN_AUTHORIZED).json(payload);
};

var sendForbidden = function (response, result) {
    response.status(FORBIDDEN).json(result);
};

var sendError = function (response, result) {
    response.status(INTERNAL_ERROR).json(result);
};

// var handleError = function (res, error) {
//     if (error instanceof ShowableError) {
//         sendOkay(res, {success: false, message: error.message});
//     } else {
//         sendError(res, {success: false, message: 'We are sorry, An internal error occurred'});
//     }
// }


var redirect = function (response, url) {
    response.redirect(url);
}

var render = function (response, renderFile, renderOptions) {
    //console.log("here")
    response.render(renderFile, renderOptions);
}

module.exports = {
    sendOkay: sendOkay,
    sendBadRequest: sendBadRequest,
    sendUnAuthorized: sendUnAuthorized,
    sendForbidden: sendForbidden,
    sendError: sendError,

    redirect: redirect,
    render: render,
}
