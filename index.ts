import {Test} from "./src/Test.component";
const serverless = require('serverless-http');
const express = require('express')
const bodyParser = require('body-parser');
const app = express()


// app.get('/', function (req, res) {
//   let test=  new Test("This is test data").getObject();
//   res.json(test);
// })
app.use(bodyParser.json({ strict: false }));

app.get('/hello/:name', function (req, res) {
  let test=  new Test(req.params.name).getObject();
  res.json(test);
})

app.post('/hello/', function (req, res) {
  let test=  new Test(req.body.name).getObject();
  res.json(test);
})


module.exports.handler = serverless(app);