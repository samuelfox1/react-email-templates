const { default: axios } = require('axios');
const cors = require('cors');
const express = require('express');
const path = require('path')

const PORT = process.env.PORT || 3003;
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

// listening for incoming request from out client
app.post('/', async (req, res) => {
    try {
        const endpoint = req.body.endpoint
        if (!endpoint) return res.status(400).json({ message: 'missing endpoint' })
        const token = req.body.token
        if (!token) return res.status(400).json({ message: 'missing token' })

        // request data from provided endpont
        const { data } = await axios({
            method: 'GET',
            url: endpoint,
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer: ${token}`,
            }
        })
        return res.json(data)
    } catch ({ message }) {
        console.error(message)
        return res.status(500).json(message)
    }
})

app.post('/save', async ({
    body: { endpoint, token, template }
}, res) => {
    try {
        if (!endpoint) return res.status(400).json({ message: 'missing endpoint' })
        if (!token) return res.status(400).json({ message: 'missing token' })

        // request data from provided endpont
        const { data } = await axios({
            method: 'PUT',
            url: endpoint,
            headers: {
                'Content-Type': 'application/json',
                authorization: `Bearer: ${token}`,
            },
            data: template
        })

        return res.json(data)
    } catch ({ message }) {
        console.error(message)
        return res.status(500).json(message)
    }
})

app.listen(PORT, () => {
    console.log(`running on port ${PORT}`);
});
