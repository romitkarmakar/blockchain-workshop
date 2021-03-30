var mempoolList = [];

function addTx(data) {
    mempoolList.push(data);
}

function getTxs() {
    return mempoolList;
}

module.exports = {
    addTx,
    getTxs,
}