const jwt = require('jsonwebtoken');

const generateToken = (user) => {
    const payload = {id: user.id};
    
    // create secret key in .env
    const secretKey = 'secret-key';
    const options = { expiresIn: '1h'};

    return jwt.sign(payload, secretKey, options);
};

module.exports = { generateToken };