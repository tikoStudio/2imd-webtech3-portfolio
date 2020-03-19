//GET ALL MESSAGES
const getAll = (req, res) => {
    res.send("get messages");
}

//GET ONE MESSAGE
const getOne = (req, res) => {
    res.send("get message " + req.params.id);
}

//POST ALL MESSAGES
const postAll =  (req, res) => {
    res.send("Post messages");
}

//PUT UPDATE ONE MESSAGE
const update = (req, res) => {
    res.send("Delete message " + req.params.id);
}

//DELETE ONE MESSAGE
const remove = (req, res) => {
    res.send("Delete message " + req.params.id);
}


module.exports.getAll = getAll;
module.exports.getOne = getOne;
module.exports.postAll = postAll;
module.exports.update = update;
module.exports.remove = remove;