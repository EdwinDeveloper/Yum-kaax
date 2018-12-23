const jwt = require('../lib/jwt');

module.exports = async (req,res,next)=>{
    req.state = {
        ...req.state,
        user:"Edwin"
    }
    if('authorization' in req.headers){
        try {
            let validJwt = await jwt.verify(req.headers.authorization);
            //console.log(validJwt);
            if(validJwt) return next();
            throw new Error("Invalid token");
        } catch (error) {
            res.status(401);
            res.json({
                success:false,
                message:"Invalid token"
            });
        }
    }else{
        res.status(401);
        res.json({
            success:false,
            message:"Unauthorized"
        });
    }
}