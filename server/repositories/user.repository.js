const usersData = require("../db/users.json");

const userRepository = () => {
    const users = usersData;
   
    const getByUserName = (userName) => {
        const user = users.find((item)=> item.userName === userName);
        if(user) {
            return Promise.resolve(user);
        }

        return Promise.reject(new Error("invalid credentials"))
    }

    const getByUserId = (userId) => {
        const user = users.find((item=> item.id === userId));
        if(user) {
            return Promise.resolve(user);
        }

        return Promise.reject(new Error("not found"));
    }


    return { getByUserName, getByUserId }
}


module.exports = userRepository()