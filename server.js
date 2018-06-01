const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, 'build')))

app.get('/', (req, res) => {
    res.sendFile('./build/index.html');
});

app.listen(PORT, () => {
    console.log(`App is running on ${PORT}`)l
});