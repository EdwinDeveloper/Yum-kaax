const jwt = require('jsonwebtoken');

const key = "SuperSecretKey";
const ttl = "8h";

module.exports = {
    create(data , secret = key){
        return new Promise((resolve,reject)=>{
            jwt.sign(data, secret, {expiresIn:ttl},(error,token)=>{
                if(error) return reject(error);
                return resolve(token);
            });
        });
    },
    verify(data,secret=key){
        return new Promise((resolve,reject)=>{
            jwt.verify(data, secret,(error,decoded)=>{
                if(error) return reject(error);
                //console.log(data);
                return resolve(decoded);
            });
        });
    }
}