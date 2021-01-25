console.log("Hello World!");
const express = require('express')
const app = express()
const port = 1509

let students = [];
let students = (
	firstname:'Sam'
	lastname: 'Jennings'
)
students.push(students);
app.get('/', (req, res) => {
  res.send(students)
})

app.listen(port, () => {
  console.log(`Example app listening at http://math.seattleacademy.org:${port}`)
})