require("dotenv").config()
const cors = require("cors")
const express = require("express")
const bodyParser = require("body-parser")
const app = express()
app.use(bodyParser.json())
app.use("/static", express.static("public", { redirect: true }))
app.use(cors())


app.listen(3006, () => {
  console.log(`AQUI EN LA ${3006}`)
})