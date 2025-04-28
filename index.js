const express = require('express');
const app = express();

app.get('/', (req, res) => {
res.send('Hello World!');
});

app.listen(3000, () => {
console.log('Server listening on port 3000');
});
app.get('/about', (req, res) => {
    res.send('Page About');
    });