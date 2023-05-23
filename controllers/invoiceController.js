const Invoice = require('../models/invoiceModel')
const mongoose = require('mongoose')

// Get all invoices
const getInvoices = async (req, res) => {
  try {
    const invoices = await Invoice.find({})
    res.status(200).json(invoices)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: error.message})
  }
}

// CREATE new invoice
const createInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.create(req.body)
    res.status(200).json(invoice)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: error.message})
  }
}

// DELETE an invoice
const deleteInvoice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid ID type'})
  }

  const invoice = await Invoice.findOneAndDelete({_id: id})

  if (!invoice) {
    return res.status(404).json({error: 'No such invoice'})
  }

  res.status(200).json(invoice)
}

// UPDATE an invoice
const updateInvoice = async (req, res) => {
  const { id } = req.params

  if (!mongoose.Types.ObjectId.isValid(id)) {
    return res.status(404).json({error: 'Invalid Invoice ID'})
  }

  const invoice = await Invoice.findOneAndUpdate({_id: id}, {
    ...req.body
  })

  if (!invoice) {
    return res.status(404).json({error: 'Invoice not found'})
  }

  return res.status(200).json(invoice)
}

module.exports = {
  getInvoices,
  createInvoice,
  deleteInvoice,
  updateInvoice
}