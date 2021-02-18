const express = require('express')
const app = express()
const port = 3000

app.get('/home', (req, res) => {
	console.log(req)
  res.send(req)
})
app.get('/', (req, res) => {
    res.send('Hii Good Morning!! how may i help you?')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.1.207:${port}`)
})