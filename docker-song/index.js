const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('success from Docker')
})

app.listen(6001)
