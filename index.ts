import * as express from "express";
import linetwork = require("linetwork");
let Router = express.Router();



export = function(conf) {
    let Linetwork = new linetwork(conf);
Linetwork.init();
    return Router;

}