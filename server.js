import express from 'express'
const app = express();

app.get('/msg', (req, res) => {
    res.json({ msg: 'Hello World' });
});

const PORT = 5000;

app.listen(PORT, () => {
    console.log(`Running on PORT ${PORT}`);
})

