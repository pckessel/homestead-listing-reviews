const express = require ('express');
const bodyParser = require ('body-parser');

const app = express();
const port = 3000;

app.use(bodyParser.json())
app.use(express.static(__dirname + '/../dist'));

app.get('/listing-reviews', (req, res) => {
  console.log('THE GET REQ CAME THROUGH!!!!')
})

app.listen(port, () => {
  console.log(`Listening on port ${port}`)
})