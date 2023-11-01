export const userValidator = (req, res, next) => {
    const {isadmin} = req.headers;
    if(!isadmin){
        return res.sendStatus(401);
    }



    next();
}