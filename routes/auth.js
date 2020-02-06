const express = require("express");
const router = new express.Router();

//call model:
const userModel = require("../models/User");

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

    userModel.findOne({"email": email})
    .then(dbRes => {
        if(dbRes){
            res.render("signup", {
                errorMessage: "The email already exists!"
            });
            return;
        }

        const salt = bcrypt.genSaltSync(bcryptSalt);
        const hashPass = bcrypt.hashSync(password, salt);

        userModel.create({
            name,
            lastname,
            email,
            password: hashPass
        })
        .then(() => {
            res.redirect("signin");
        })
        .catch(error => {
            console.log(error);
        })
    })
    .catch(error => {
        next(error);
    });

    if(email === ""||password === ""){
        res.render("signup",{
            errorMessage: "Indicate a username and a password to sign up"
        });
        return;
    }
});

router.get("/signin", (req, res) => {
    res.render("signin");
  });

router.post("/signin", (req, res, next) => {
    // const theName = req.body.name;
    // const theLastname = req.body.lastname;
    const theEmail = req.body.email;
    const thePassword = req.body.password;

    if(theEmail === ""||thePassword === ""){
        res.render("signin",{
            errorMessage: "Please enter both, email and password to sign up."
        });
        return;
    }

    userModel.findOne({"email": theEmail})
    .then(dbRes => {
        if(!dbRes) {
            res.render("signin", {
                errorMessage: "The email doesn't exist."
            });
            return;
        }
        if(bcrypt.compareSync(thePassword, dbRes.password)){
            req.session.currentUser = dbRes;
            res.redirect("/");
        } else {
            res.render("signin", {
                errorMessage: "Incorrect password"
            });
        }
    })
    .catch(error => {
        next(error);
    })
});

// router.get("/signout", (req, res) => {
//     req.session.destroy((err) => {
//       res.redirect("/signin");
//     });
//   });

module.exports = router;
