var qrpc = require('qrpc')

var client = qrpc.connect(1337, 'localhost', function() {
    client.call(process.argv[2], process.argv[3] || "", function(err, ret) {
        console.log("reply from server:", ret)
        process.exit(1)
    })
})