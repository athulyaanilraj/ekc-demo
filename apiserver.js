const express = require("express")
const app = express()
//registering 
app.use(express.json())
let products = []//temporary storage
app.get("/products", (req, res) => {
    res.send(products)
})
app.post("/products", (req, res) => {
    if (req.body)
        products.push(req.body)
    res.send("<h1>The product is saved successfully</h1>")
})
app.put("/products", (req, res) => {
    res.send("<h1>The product is updated successfully</h1>")
})
app.delete("/products", (req, res) => {
    res.send("<h1>The product is deleted successfully</h1>")
})

app.listen(3800, () => console.log("api server running on PORT 3800"))
