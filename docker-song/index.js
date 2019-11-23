const express = require('express');
const app = express();

app.get('/', (req, res) => {
    res.end('success from Docker,push')
})

app.listen(6001)
