const router = require('express').Router();
const users = require("../repositories/user.repository");
const {generateToken} = require("../express/authService");

router.post('/', async (req, res) => {
    const {userName, password} = req.body;

    // part of the user controller responsability
    try{
        const user = await users.getByUserName(userName);
        if(user && user.password === password){
            const token = generateToken(user);
            res.json({ token });
        }else {
            res.status(401).json({ message: 'Invalid credentials' });
        }
    } catch {
        res.status(401).json({ message: 'Invalid credentials' });  
    }
})

module.exports = router;