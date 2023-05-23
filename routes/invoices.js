const express = require('express')
const { getInvoices, createInvoice, deleteInvoice } = require('../controllers/invoiceController')

const router = express.Router()

// Get all invoices
router.get('/', getInvoices)

// POST new invoice
router.post('/', createInvoice)

// DELETE an invoice
router.delete('/:id', deleteInvoice)

module.exports = router