const router = require('express').Router();
const { getByUserId } = require("../repositories/user.repository");
const { createUserProfile } = require('../domain/services/userServices');
const authMiddleware = require('../express/middleware/authMiddleware');

router.get('/profile', authMiddleware, async (req, res) => {
  const userId = req.userId;

    try {
        const userData = await getByUserId(userId);
        if(userData) {
            res.json(createUserProfile(userData));
        } else {
            res.status(404).json({message: "User not found"});
        }
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
});

module.exports = router;
