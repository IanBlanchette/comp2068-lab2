const express = require('express');
const app = express();
const PORT = 3000;
const handleHTTP = require('./lab2');

app.get('/' , handleHTTP);
app.listen(PORT);


console.log(`Your application is running at http://localhost:${PORT}`);

