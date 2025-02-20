const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const transactionSchema = new Schema({
    receipt: { type: Schema.Types.ObjectId, required: true, unique: true },
    paymentId: { type: String },
    orderId: { type: String, required: true, unique: true },
    signature: { type: String },
    amount: { type: Number, required: true },
    status: { type: String, default: "pending", enum: ["pending", "successful", "unsuccessful"] }
}, { timestamps: true })

module.exports = mongoose.model('transaction', transactionSchema);