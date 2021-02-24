const express = require('express');
const expressHBS = require('express-handlebars');
const path = require('path');

const app = express();

app.use(express.static(path.join(__dirname + 'views')));








app.get('/hello', (req, res) => {
    res.json([
        {name: 'Dima'},
        {name: 'Yura'},
        {name: 'Andriy'},
    ])
})

app.listen(5000, () => {
    console.log('App listen 5000')
})
