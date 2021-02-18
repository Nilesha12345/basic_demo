const express = require('express')
const app = express()
const port = 3000

app.post('/webhost', (req, res) => {
	console.log("Repo Name : ",req.repository.name)
  console.log("Repo full name : ",req.repository.full_name)
  console.log("Repo owner Name : ",req.repository.owner.name)
  console.log("Repo URL : ",req.html_url)
  console.log("Repo Master branchName : ",req.master_branch)
  console.log("Pusher Name : ",req.pusher.name)
  console.log("sender name : ",req.login)
  res.send(200);
})
app.get('/', (req, res) => {
    //console.log("helpme")
    res.send('Hii Good Morning!! how may i help you?')
  })

app.listen(port, () => {
  console.log(`Example app listening at http://192.168.1.207:${port}`)
})