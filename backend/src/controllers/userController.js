var User = require('../models/User');

exports.getUsers = async function () {
    try {
        return await User.find();
        
    } catch (err) {
        console.log(err);
    }
}

exports.createUser = async function (user) {
    try {
        var validation;
        var users = await User.find();
        console.log(users);
        users.forEach((element) => {
            if (element.mail == user.mail) {
                return validation = "O email informado já existe!";
            }
        })
        if (validation) {
            return validation;
        }
        
        return await User.create(user);
    }
    catch (err) {
        console.log(err);
    }
};