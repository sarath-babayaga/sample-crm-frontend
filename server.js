const PORT = 8000
const express = require('express')
const cors = require('cors')
require('dotenv').config()
const axios = require('axios')
// const nodemon = require('nodemon')

const app = express()
app.use(cors())
app.use(express.json())

const url = 'https://c4e0b6d9-cf51-4cc6-aa60-9169addd275f-asia-south1.apps.astra.datastax.com/api/rest/v2/namespaces/crm/collections/tasks'
const token = 'AstraCS:IjiAMZOylDSkmEYIymHCmAmN:4fd7bc520724390331272d7858f99a730532a87e9c7643aff49bfb12b356f059'

app.post('/tickets', async (req,res) => {
    const formData = req.body.formData

    const options = {
        method: 'POST',
        headers: {
            Accepts: 'application/json',
            'X-Cassandra-Token': token,
            'Content-Type': 'application/json'
        },
        data: formData
    }

    try {
        const response = await axios(url, options)
        res.status(200).json(response.data)
    }catch (err) {
        console.error(err)
        res.status(500).json({message: err})
    }


})




app.listen(PORT, () => console.log('server running on port ' + PORT))
