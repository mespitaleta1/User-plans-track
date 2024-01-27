const router = require('express').Router();
const plans = require('../repositories/plans.repository');
const authMiddleware = require('../express/middleware/authMiddleware');

router.get('/', authMiddleware, async (req, res) => {
    try {
        const plansData = await plans.getAllPlans();
        res.json(plansData);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
});

module.exports = router;
