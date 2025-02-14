const express = require ('express')
const app = express ()
const port = 6969

app.get('/', (req, res) => {
  res.send('Hello MotherFucker!')
})


app.get('/hello', (req, res) => {
  res.send('Hippity Poppity Boo! I am still here you MotherFucker!')
})


app.listen(port, () => {
  console.log(`Listening to port ${port}`)
})