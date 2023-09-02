const express = require("express")

const app = express()

app.get('/', (request, response) => {
  response.send('hello world')
})

const PORT = 3000
app.listen(PORT, () => console.log(`server is running on port ${PORT}`)) 