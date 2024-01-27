const plansData = require("../db/plans.json");

const plansRepository = () => {
   
    const getAllPlans = () => {
        return Promise.resolve(plansData);
    }

    return { getAllPlans }
}


module.exports = plansRepository();