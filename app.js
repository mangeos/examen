const express = require('express')
const app = express()
const port = 3000

const mongodb = require('./routes/mongodb');
const mysql = require('./routes/mysql');

app.use("/mongodb", mongodb)

app.use("/mysql", mysql)

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
