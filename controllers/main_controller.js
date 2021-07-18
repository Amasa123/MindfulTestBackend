const express = require('express');
const router = express.Router();
let User = require('../models/user')
let Events = require('../models/events')
var _ = require("underscore");
module.exports = function () {
    router.post('/login', async function (req, res) {
        console.log(req.body)
        await User.findOne({ username: req.body.username }, function (err, data) {
            try {
                if (!err) {
                    if (data.password === req.body.password) {
                        console.log("Password Match")
                        status = {
                            Status: "Approved"
                        }
                        res.status(200).send(status);
                    } else {
                        status = {
                            Status: "Declined",
                            Error: "Password Mimatch"
                        }
                        console.log("Password Does Not Match")
                        res.status(200).send(status);
                    }                 
                } else {
                    status = {
                        Status: "Declined",
                    }
                    res.status(200).send(status);
                }
            } catch {
                status = {
                    Status: "Declined",
                    Error: "User Not Found"
                }
                res.status(200).send(status);
            }
        })
    })
    router.get('/events', async function (req, res) {
        await Events.find(function (err,data){
            try{
                if(!err){
                    res.status(200).send(data);
                }else{
                    res.status(400).send(err);
                }
            }catch{
                res.status(400).send("Error");
            }
            
        })
       
    })
    return router;
}