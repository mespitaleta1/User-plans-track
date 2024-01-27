const users = require("../repositories/user.repository");
const {generateToken} = require("../express/authService");

const authenticationUser = (userName) => {
    const user = users.getByUserName(userName);
        if(user && user.password === password){
            const token = generateToken(user);
            return token;
        }else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
}; 

module.exports = authenticationUser();