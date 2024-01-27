const router = require('express').Router();
const plans = require('../repositories/plans.repository');

router.get('/', async (req, res) => {
    try {
        const plansData = await plans.getAllPlans();
        res.json(plansData);
    } catch (error) {
        res.status(500).json({message: 'Internal server error'});
    }
});

module.exports = router;
