var level = require("level");
var db = level("blockdb");

db.put(
  "1",
  JSON.stringify({
    txs: "Fuck you",
  }),
  (err) => (err ? console.error(err) : null)
);

db.get("1", (err, data) => {
    if (err) console.error(err);
    else console.log(data);
})