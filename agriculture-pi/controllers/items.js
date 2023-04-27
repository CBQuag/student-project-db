const { Item } = require('../models');

module.exports={
    async add(req, res){
        try {
            const item = await Item.create(req.body);
            res.status(201).json(item);
        } catch (error) {
            res.status(500).json({ message: 'Error creating item', error });
        }
    },

    // Get all items, including associated items
    async list(req, res){
        try {
            const items = await Item.findAll(); // how can we include the ITEMS associated with the items in this response?
            res.json(items);
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving items', error });
        }
    },

    // Get a specific item by ID, including associated items
    async getById(req, res){
        try {
            const item = await Item.findByPk(req.params.id); // how can we include the ITEMS associated with the items in this response?

            if (!item) {
            res.status(404).json({ message: 'item not found' });
            } else {
            res.json(item);
            }
        } catch (error) {
            res.status(500).json({ message: 'Error retrieving item', error });
        }
    },

    // Update a item by ID
    async update(req, res){
        try {
            const [updated] = await Item.update(req.body, {
            where: { id: req.params.id },
            });

            if (updated) {
            const updateditem = await Item.findByPk(req.params.id);
            res.json(updateditem);
            } else {
            res.status(404).json({ message: 'item not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error updating item', error });
        }
    },

    // Delete a item by ID
    async delete(req, res){
        try {
            const deleted = await Item.destroy({
            where: { id: req.params.id },
            });

            if (deleted) {
            res.status(204).json({ message: 'item deleted' });
            } else {
            res.status(404).json({ message: 'item not found' });
            }
        } catch (error) {
            res.status(500).json({ message: 'Error deleting item', error });
        }
    }
}