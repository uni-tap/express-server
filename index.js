const express = require('express')
const app = express()

app.get('/v1', (req, res) => {
	res.send("Hi")
})

app.listen(process.env.PORT || 3001, () => console.log("Server started"))
