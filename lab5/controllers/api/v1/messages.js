//GET ALL MESSAGES
const getAll = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING messages"
    })
}

//GET ONE MESSAGE
const getOne = (req, res) => {
    res.json({
        "status": "success",
        "message": "GETTING message with id " + req.params.id
    })
}

//POST ALL MESSAGES
const postAll =  (req, res) => {
    res.json({
        "status": "success",
        "message": "Posting messages"
    })
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
module.exports.postAll = postAll;
module.exports.update = update;
module.exports.remove = remove;
module.exports.getAllUser = getAllUser;