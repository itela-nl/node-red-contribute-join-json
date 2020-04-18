module.exports = function(RED) {
    function MergeJSON(config) {
        RED.nodes.createNode(this,config);
        var node = this;
        node.on('input', function([msg1, msg2]) {
            msg.payload.msg1 = msg1.payload; 
            msg.payload.msg2 = msg2.payload; 
            node.send(msg);
        });
    }
    RED.nodes.registerType("join-json",MergeJSON);
}