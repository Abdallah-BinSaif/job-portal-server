const express = require("express")
const cors = require("cors")
const port = process.env.PORT || 3313

const app = express()

app.use(cors())
app.use(express.json())






app.get("/",(req, res)=>{
    res.send("Hello World")
})

app.listen(port,()=>{
    console.log(`This project is running in port: ${port}`)
})