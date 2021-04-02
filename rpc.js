var qrpc = require("qrpc");
var server = qrpc.createServer();
var level = require("level");
var db = level("blockdb");
var ellipticcurve = require("starkbank-ecdsa");
var crypto = require("crypto");
var getAddress = require("./address");
var { addTx, getTxs } = require("./mempool");

server.addHandler("addtx", function (req, res, next) {
  addTx(req.m);
  next(null, req.m);
});

server.addHandler("gettxs", function (req, res, next) {
    next(null, getTxs());
});

server.addHandler("gettx", function (req, res, next) {
  db.get("1", (err, data) => {
    if (err) console.error(err);
    else next(err, data);
  });
});

server.addHandler("getaddr", function (req, res, next) {
  next(null, getAddress());
});

server.listen(1337, function () {
  console.log("qrpc listening on port 1337");
});
