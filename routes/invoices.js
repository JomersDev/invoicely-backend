const express = require('express')
const { getInvoices, createInvoice } = require('../controllers/invoiceController')

const router = express.Router()

// Get all invoices
router.get('/', getInvoices)

// POST new invoice
router.post('/', createInvoice)

module.exports = router