const express = require("express");
const router = new express.Router();

//call model:
const user = require("../models/User");

//BCrypt for password:
const bcrypt = require("bcrypt");
const bcryptSalt = 10;

router.get("/signup", (req, res) => {
    res.render("signup");
});

router.post("/signup", (req, res, next) => {
    const name = req.body.name;
    const lastname = req.body.lastname;
    const email = req.body.email;
    const password = req.body.password;

    user.findOne({"email": email})
    .then(email => {
        if(email !== null){
            res.render("signup", {
                errorMessage: "The email already exists!"
            });
            return;
        }

        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);
    })
})

module.exports = router;
