var mongoose = require('mongoose');
var Schema = mongoose.Schema;
const messageSchema = new Schema({
    text: String,
    user: String
});
const Message = mongoose.model('Message', messageSchema);


//GET ALL MESSAGES
const getAll = (req, res) => {
    Message.find({}, (err, docs) => {
        if(!err) {
            res.json({
                "status": "success",
                "message": docs
            })
        }
    })
    
}

//GET ONE MESSAGE
const getOne = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING message with id " + req.params.id
    })
}

//POST  MESSAGE
const post =  (req, res) => {
    let message = new Message()
    message.text = "nodejs isn’t hard, or is it?"
    message.user = "Pikachu"
    message.save( (err, doc) => {
        if(!err) {
            res.json({
                "status": "success",
                "message": doc
            })
        }
    } )

    
}

//PUT UPDATE ONE MESSAGE
const update = (req, res) => {
    res.json({
        "status": "success",
        "message": "UPDATING message with id " + req.params.id
    })
}

//DELETE ONE MESSAGE
const remove = (req, res) => {
    res.json({
        "status": "success",
        "message": "REMOVING message with id " + req.params.id
    })
}

//GET ALL MESSAGE FROM ONE USER
const getAllUser = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING messages from user " + req.params.user
    })
}


module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.post = post;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getAllUser = getAllUser;