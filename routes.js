const express = require('express');
const router = express.Router();
const path = require('path');

router.all('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'my-app/build', 'index.html'));
});

module.exports = router;