const express = require('express');
const upload = require('../middleware/upload');
const { addBuyer } = require('../controllers/buyerController');
const router = express.Router();
router.post('/add', upload.single('buyerPhoto'), addBuyer);
module.exports = router;
