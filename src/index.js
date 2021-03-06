const express = require('express');

const app = express();

app.use(function (req, res, next) {

    res.setHeader('Access-Control-Allow-Origin', '*');

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');

    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type');

    res.setHeader('Access-Control-Allow-Credentials', true);

    next();
});

app.get('/secondary', (req, res) => {
    console.log("Secondary");
    res.json({
        responseFrom: "secondary"
    });
});

app.listen(process.env.PORT || 3000, () => console.log('Example app listening on port: ' + process.env.PORT || 3000))