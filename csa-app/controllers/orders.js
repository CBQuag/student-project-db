const { Orders } = require('../models');

module.exports={
    async add(req, res){
        try {
            const orders = await Orders.create(req.body);
            res.status(201).json(Orders);
        } catch (error) {
            res.status(500).json({ message: 'Error creating Orders', error });
        }
    },

    // Get all orderss, including associated orderss
    async list(req, res){
        try {
            const orders = await Orders.findAll(); // how can we include the ordersS associated with the orderss in this response?
            res.json(orders);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving orderss', error });
        }
    },

    // Get a specific Orders by ID, including associated orderss
    async getById(req, res){
        try {
            const orders = await Orders.findByPk(req.params.id); // how can we include the ordersS associated with the orderss in this response?

            if (!orders) {
            res.status(404).json({ message: 'Orders not found' });
            } else {
            res.json(orders);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving Orders', error });
        }
    },

    // Update a Orders by ID
    async update(req, res){
        try {
            const [updated] = await Orders.update(req.body, {
            where: { id: req.params.id },
            });

            if (updated) {
            const updatedorders = await Orders.findByPk(req.params.id);
            res.json(updatedorders);
            } else {
            res.status(404).json({ message: 'Orders not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating Orders', error });
        }
    },

    // Delete a Orders by ID
    async delete(req, res){
        try {
            const deleted = await Orders.destroy({
            where: { id: req.params.id },
            });

            if (deleted) {
            res.status(204).json({ message: 'Orders deleted' });
            } else {
            res.status(404).json({ message: 'Orders not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting Orders', error });
        }
    }
}