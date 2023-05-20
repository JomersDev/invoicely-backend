const mongoose = require('mongoose')

const Schema = mongoose.Schema

const invoiceSchema = new Schema({
  id: String,
  createdAt: Date,
  paymentDue: Date,
  description: String,
  paymentTerms: Number,
  clientName: String,
  clientEmail: String,
  status: String,
  senderAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String
  },
  clientAddress: {
    street: String,
    city: String,
    postCode: String,
    country: String
  },
  items: [
    {
      name: String,
      quantity: Number,
      price: Number,
      total: Number
    }
  ],
  total: Number
}, { timestamps: true})


module.exports = mongoose.model('Invoice', invoiceSchema)