import expressJWT from 'express-jwt';

exports.checkAuth = (req, res, next) => {
    const isAdmin = true;
    if(isAdmin){
        next();
    } else {
        res.redirect('/');
    }
}

export const requireSignin = expressJWT({
    secret: "123456",
    algorithms:["HS256"],
    requestProperty: "auth" //req.auth
});


export const isAuth = (req, res, next) => {
    console.log(req.profile);
    console.log(req.auth)
    const status = req.profile._id == req.auth._id;
    if(!status){
        res.status(401).json({
            message: "Ban khong co quyen truy cap"
        })
    }
    next();
}

export const isAdmin = (req, res, next) => {
    if(req.profile.role == 0) {
        return res.status(401).json({
            message: "Ban khong phai la admin"
        })
    }
    next();
}