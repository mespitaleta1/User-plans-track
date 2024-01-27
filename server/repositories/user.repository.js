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

    return { getByUserName }
}


module.exports = userRepository()