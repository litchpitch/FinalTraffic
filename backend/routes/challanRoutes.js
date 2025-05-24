const express = require('express');
const router = express.Router();
const Challan = require('../models/Challan');

router.get('/:challanId', async (req, res) => {
    const challanId = req.params.challanId;

    try {
        const challan = await Challan.findOne({ challanId });

        if (!challan) {
            return res.status(404).json({ message: 'Challan not found' });
        }

        res.json(challan);
    } catch (error) {
        res.status(500).json({ message: 'Server error', error });
    }
});

module.exports = router;
