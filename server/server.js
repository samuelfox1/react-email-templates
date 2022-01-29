const express = require('express');
const cors = require('cors');
const { default: axios } = require('axios');

const PORT = process.env.PORT || 3002;
const app = express();

app.use(cors());
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

if (process.env.NODE_ENV === 'production') {
    app.use(express.static(path.join(__dirname, '../client/build')));
}

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../client/build/index.html'));
});

app.post('/', (req, res) => {
    const { body: { endpoint, user } } = req
    // request data from source server, respond to client with data
    axios({
        method: 'GET',
        url: `http://${endpoint}`,
        headers: {
            'Content-Type': 'application/json',
            authorization: `Bearer: ${user}`,
        }
    })
        .then(({ data }) => {
            console.log(data)
            res.json(data)
        })
        .catch(({ message }) => {
            console.error(message)
            res.status(500).json(message)
        })
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
