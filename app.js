const express = require('express')
const app = express();
const port = 8000;


// parse application/x-www-form-urlencoded
app.use(express.urlencoded({ extended: false }))

// parse application/json
app.use(express.json())

app.use((req, res, next) => {
  res.header('Access-Control-Allow-Origin', '*');
  next();
});

const optimize = require( './router/optimize')


app.use('/optimize', optimize)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}!`)
});