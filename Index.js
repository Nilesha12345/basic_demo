const express = require('express')
const app = express()
const port = 3000

app.post('/webhost', (req, res) => {
  res.send(200);
})
app.get('/', (req, res) => {
    //console.log("helpme")
    res.send('Hii Good Morning!! how may i help you?')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.1.207:${port}`)
})