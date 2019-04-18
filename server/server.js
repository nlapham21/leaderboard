const express = require('express');
const path = require('path');

const app = express();
const publicPath = path.join(__dirname, '..', 'public');
const port = process.env.PORT || 3000;

app.use(express.static(publicPath));

app.get('/api/test', (req, res) => { // match all un-matched routes
    res.json({ test: 'test' });
});

app.get('*', (req, res) => { // match all un-matched routes
    res.sendFile(path.join(publicPath, 'index.html'));
});

app.listen(port, () => {
    console.log(`Server is up on ${port}`);
});
