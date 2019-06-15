var express = require('express');
var router = express.Router();
var blockchain = require(__BASE__ + "blockchain");
let RESPONSE = require(__BASE__  + "ResponseHandler");
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/getBlockChain', function(req, res){


    var chain = (blockchain.getBlockchain());
    console.log("chainlkfjlskf",chain);
    RESPONSE.sendOkay(res, {
    success: true, data:chain});
});

router.post('/getGenesisBlock',function(req,res){
  res.send(res,{})
});

router.post('/getCurrentBlock',function(req,res){
  res.send(res,{});
});

router.post('/addBlock',function(req,res){

    console.log('inside', req.body.data);
  blockchain.addBlock(req.body.data);
  RESPONSE.sendOkay(res,{success:true, data:'Block is successfully added to the chain'});
})

router.get('/blocks', (req, res) => res.send(JSON.stringify(blockchain)));
router.post('/mineBlock', (req, res) => {
    var newBlock = generateNextBlock(req.body.data);
    addBlock(newBlock);
    broadcast(responseLatestMsg());
    console.log('block added: ' + JSON.stringify(newBlock));
    res.send();
});
router.get('/peers', (req, res) => {
    res.send(sockets.map(s => s._socket.remoteAddress + ':' + s._socket.remotePort));
});
router.post('/addPeer', (req, res) => {
    connectToPeers([req.body.peer]);
    res.send();
});
module.exports = router;
