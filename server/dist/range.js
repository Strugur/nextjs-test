"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function default_1(req, res, next) {
    res.header('Content-Range', 'products 0-20/20');
    next();
}
exports.default = default_1;
