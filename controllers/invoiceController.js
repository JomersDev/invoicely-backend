const Invoice = require('../models/invoiceModel')
const mongoose = require('mongoose')

// Get all invoices
const getInvoices = async(req, res) => {
  const invoices = await Invoice.find({})

  res.status(200).json(invoices)
}

// CREATE new invoice
const createInvoice = async(req, res) => {

  try {
    const invoice = await Invoice.create(req.body)
    res.status(200).json(invoice)
  } catch (error) {
    console.log(error)
    res.status(400).json({error: error.message})
  }
} 


module.exports = {
  getInvoices,
  createInvoice
}