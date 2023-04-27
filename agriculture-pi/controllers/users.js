const { Users } = require('../models');

module.exports={
    async add(req, res){
        try {
            const users = await Users.create(req.body);
            res.status(201).json(Users);
        } catch (error) {
            res.status(500).json({ message: 'Error creating Users', error });
        }
    },

    // Get all Userss, including associated Userss
    async list(req, res){
        try {
            const users = await Users.findAll(); // how can we include the UsersS associated with the Userss in this response?
            res.json(users);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving Userss', error });
        }
    },

    // Get a specific Users by ID, including associated Userss
    async getById(req, res){
        try {
            const users = await Users.findByPk(req.params.id); // how can we include the UsersS associated with the Userss in this response?

            if (!users) {
            res.status(404).json({ message: 'Users not found' });
            } else {
            res.json(users);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving Users', error });
        }
    },

    // Update a Users by ID
    async update(req, res){
        try {
            const [updated] = await Users.update(req.body, {
            where: { id: req.params.id },
            });

            if (updated) {
            const updatedUsers = await Users.findByPk(req.params.id);
            res.json(updatedUsers);
            } else {
            res.status(404).json({ message: 'Users not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating Users', error });
        }
    },

    // Delete a Users by ID
    async delete(req, res){
        try {
            const deleted = await Users.destroy({
            where: { id: req.params.id },
            });

            if (deleted) {
            res.status(204).json({ message: 'Users deleted' });
            } else {
            res.status(404).json({ message: 'Users not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting Users', error });
        }
    }
}