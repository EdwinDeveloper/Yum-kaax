const bcrypt = require('bcryptjs');
const saltRount = 10;

module.exports = {
    create(password){
        return new Promise((resolve,reject)=>{
            bcrypt.hash(password, saltRount,(error,hash)=>{
                if(error) return reject(error);
                resolve(hash);
            });
        });
    },
    verify(password,hash){
        return new Promise((resolve,reject)=>{
            bcrypt.compare(password,hash,(error,same)=>{
                if(error) return reject(error);
                resolve(same);
            });
        });
    }
}