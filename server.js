const express = require("express")
const app = express()
app.get("/", (req, res) => {
    res.send("<h1 style=color:red:text-align:centre>Welcome to my website.</h1>")
})
app.get("/products/:id", (req, res) => {
    let prodid = req.params.id
    res.send(`Details of product with id ${prodid}`)
})
app.get("/search", (req, res) => {
    let prodname = req.query.name
    res.send(`Details of product with id ${prodname}`)
})
app.listen(4500, () => console.log("Express server is running on 4500"))