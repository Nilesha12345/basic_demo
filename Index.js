const express = require('express')
const app = express()
var createHandler = require('github-webhook-handler')
var handler = createHandler({ path: '/webhost', secret: 'myhashsecret' })
const port = 3000

app.post('/webhost', (req, res, event) => {
  handler(req, res, function(err) {
    res.statusCode = 404
    res.end('no such location')
  })
})

// handler.on('error', function (err) {
//   console.error('Error:', err.message)
// })

handler.on('push', function (event) {
  // console.log("Repo Name : ",event.payload.repository.name)
  // console.log("Repo full name : ",event.payload.repository.full_name)
  // // console.log("Repo owner Name : ",event.payload.repository.owner.name)
  // // console.log("Repo URL : ",event.payload.html_url)
  // // console.log("Repo Master branchName : ",event.payload.master_branch)
  // // console.log("Pusher Name : ",event.payload.pusher.name)
  // console.log("sender name : ",event.payload.login)
})

app.get('/', (req, res) => {
    res.send('Hii Good Morning!! how may i help you?')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.1.207:${port}`)
})