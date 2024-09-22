const User = require('../models/User');
// Create a new user
exports.createUser = async (req, res) => {
    try {
        const user = new User(req.body);
        const savedUser = await user.save();
        res.json(savedUser);
        console.log(user);
        
    } catch (err) {
        res.status(400).send(err.message);
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const users = await User.find();
        // console.log(users);
        res.json(users);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Get a user by ID
exports.getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) {
            return res.status(404).send('User not found');
        }
        res.json(user);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Update a user
exports.updateUser = async (req, res) => {
    try {
        console.log(req.body);
        
        const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!updatedUser) {
            return res.status(404).send('User not found');
        }
        res.json(updatedUser);
    } catch (err) {
        res.status(500).send(err.message);
    }
};

// Delete a user
exports.deleteUser = async (req, res) => {
    try {
        const deletedUser = await User.findByIdAndDelete(req.params.id);
        if (!deletedUser) {
            return res.status(404).send('User not found');
        }
        res.json({ message: 'User deleted successfully' });
    } catch (err) {
        res.status(500).send(err.message);
    }
};
