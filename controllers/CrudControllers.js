
const UserModel = require('../models/UserModel')

const ViewUser = async () => {
    try {
        let user = await UserModel.find({})
        console.log(user);
        return res.render('view', {
            all: user
        })
    } catch (error) {
        console.log(error);
        return false
    }
}

const addUser = (req, res) => {
    return res.render('add')
}

const CreateUser = async (req, res) => {
    try {
        const { name, phone } = req.body
        if (!phone || !name) {
            console.log("all field are required");
            return res.redirect("/crud/adduser")
        }

        const user = await UserModel.create({
            name: name,
            phone: phone
        })

        return res.redirect('/crud')
    } catch (error) {
        console.log(error);
        return false
    }
}

module.exports = {
    ViewUser, addUser, CreateUser
}