const express = require('express');

const app = express();

app.get('/secondary', (req, res) => {
    res.json({
        responseFrom: "secondary"
    });
});

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port: ' + process.env.PORT || 3000))