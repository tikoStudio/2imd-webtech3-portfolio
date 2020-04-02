const Corona = require('../models/Corona')

const getAll = (req, res, next) => {

    Corona.find({}, (err, docs) => {
        if(!err) {
            res.json({
                "status": "success",
                "countries": docs
            })
        } else {
            res.json({
                "status": "error",
                "message": "could not find Corona cases status right now"
            })
        }
    })    
}

const updates = (req, res) => {
    let updateItem = req.params.country;
    let amount = req.body.amount
    console.log(amount)
    if(updateItem === "Belgium") {
        Corona.findOneAndUpdate({}, {"Belgium": amount}, (err, docs) => {
            if(!err) {
                res.json({
                    "status": "success",
                    "countries": docs
                })
            }
        })
    }else if(updateItem === "Netherlands") {
        Corona.findOneAndUpdate({}, {"Netherlands": amount}, (err, docs) => {
            if(!err) {
                res.json({
                    "status": "success",
                    "countries": docs
                })
            }
        })
    }else if(updateItem === "Luxemburg") {
        console.log(updateItem)
        Corona.findOneAndUpdate({}, {"Luxemburg": amount}, (err, docs) => {
            if(!err) {
                res.json({
                    "status": "success",
                    "countries": docs
                })
            }
        })
    }
}

module.exports.getAll = getAll
module.exports.updates = updates