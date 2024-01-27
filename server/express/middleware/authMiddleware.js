const jwt = require('jsonwebtoken');

const authMiddleware = (req, res, next) => {
    const token = req.headers.authorization;
    if(!token) {
        return res.status(401).json({message: 'Unauthorized: Token is missing'});
    }

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET_KEY);
        req.userId = decoded;
        next();
    } catch(error) {
        res.status(401).json({message: 'Unauthorized: Invalid token'});
    }
}; 

module.exports = authMiddleware;