var ellipticcurve = require("starkbank-ecdsa");
var crypto = require("crypto");

// console.log("SHA: " + shaHash);
// console.log("Ripemd: " + ripemdHash);
// console.log("Private Key: " + privateKey.toPem())

function getAddress() {
  // Generate ECDSA Private and Public Key
  let privateKey = new ellipticcurve.PrivateKey();
  let publicKey = privateKey.publicKey();

  let shaHash = crypto
    .createHash("sha256")
    .update(publicKey.toString())
    .digest("hex");
  let ripemdHash = crypto.createHash("ripemd160").update(shaHash).digest("hex");

  return ripemdHash;
}

module.exports = getAddress
