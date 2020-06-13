import jwt from 'jsonwebtoken';

const verifyToken = (jwtToken) => {
    try{
        return jwt.verify(jwtToken, 'secret');
    }catch(e){
        console.log('error:',e);
        return null;
    }
};

export const AuthorizeHeader = (req, res, next) => {
    const authHeader = req.header('Authorization');
    if (authHeader) {
        if (verifyToken(authHeader)) {
            next();
        } else {
            return res.status(403).send({
                success: false,
                error: {
                    message: "Forbidden Error",
                    code: 403
                }
            });
        }
    } else {
        return res.status(401).send({
            success: false,
            error: {
                message: "Unauthorized Error",
                code: 401
            }
        });
    }
};
