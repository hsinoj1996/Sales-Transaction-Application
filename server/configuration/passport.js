const JwtStrategy = require("passport-jwt").Strategy
const ExtractJwt = require("passport-jwt").ExtractJwt
const mongoose = require("mongoose");
const User = mongoose.model("customer")
const keys = require("./keys");
const passport = require("passport");

const opts = {};
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = keys.secretOrKey;

//creating payload to carry out the authentication

module.exports = passport =>{
    passport.use(
        new JwtStrategy(opts, (jwt_payload, done)=>{
            User.findById(jwt_payload.id).then((customer)=>{
                if(customer){
                    return done(null, customer);
                }else{
                    return done(null,customer);
                }
            }).catch((error)=>{
                res.json({
                    message:"invalid payload",
                    error
                })
            })
        })
    )
}