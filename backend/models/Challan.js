const mongoose = require('mongoose');

const challanSchema = new mongoose.Schema({
    challanId: { type: String, required: true, unique: true },
    name: String,
    vehicleRegistration: String,
    date: String,
    violation: String,
    fineAmount: String,
    status: String,
    dueDate: String,
    paidDate: String,
    paymentMethod: String,
    location: String
});

module.exports = mongoose.model('Challan', challanSchema);
