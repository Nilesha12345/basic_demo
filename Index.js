// const express = require('express')
// const app = express()
// var createHandler = require('github-webhook-handler')
// var handler = createHandler({ path: '/webhost', secret: 'myhashsecret' })
// const port = 3000


// app.post('/webhost', (req, res, event) => {
//   // handler(req, res, function(err) {
//   //   res.statusCode = 404
//   //   res.end('no such location')
//   // })
// })

// // handler.on('error', function (err) {
// //   console.error('Error:', err.message)
// // })

// // handler.on('push', function (event) {
// //   // console.log('Received a push event for %s to %s',
// //   //   event.payload.repository.name,
// //   //   event.payload.ref)
// //   console.log("Repo Name : ",event.payload.repository.name)
// //   console.log("Repo full name : ",event.payload.repository.full_name)
// //   console.log("Repo owner Name : ",event.payload.repository.owner.name)
// //   console.log("Repo URL : ",event.payload.html_url)
// //   console.log("Repo Master branchName : ",event.payload.master_branch)
// //   console.log("Pusher Name : ",event.payload.pusher.name)
// //   console.log("sender name : ",event.payload.login)
// // })

// app.get('/', (req, res) => {
//     res.send('Hii Good Morning!! how may i help you?')
//   })

// app.listen(port, () => {
//   console.log(`Example app listening at http://192.168.1.207:${port}`)
// })


var githubhook = require('githubhook');
// configure listener for github changes
var github = githubhook({/* options */
  host: "0.0.0.0",
  port: 3000,
  path: "/webhost",
  secret: "123456"
});

// listen to push on github on branch master
github.on('push', function (repo, ref, data) {
  // console.log("Repo Name : ", data.repository.name)
  // console.log("Repo full name : ",data.repository.full_name)
  // console.log("Repo owner Name : ", data.repository.owner.name)
  // console.log("Repo URL : ", data.repository.html_url)
  // console.log("Repo Master branchName : ",data.repository.master_branch)
  // console.log("Pusher Name : ", data.pusher.name)
});

// listen to github push
github.listen();


