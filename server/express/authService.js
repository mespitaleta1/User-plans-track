const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {id: user.id};
    const secretKey = process.env.JWT_SECRET_KEY;
    const options = { expiresIn: '1h'};

    return jwt.sign(payload, secretKey, options);
};

module.exports = { generateToken };