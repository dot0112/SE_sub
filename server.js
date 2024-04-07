const express = require('express');
const routes = require('./routes');
const path = require('path');

const app = express();
const PORT = 5000;

app.use(express.static(path.join(__dirname, 'my-app/build')));

app.listen(PORT, () => {
    app.use('/', routes);
    console.log(`Server is running on port ${PORT}`);
});