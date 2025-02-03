import express from "express";
const app = express();
const port = 3000;
app.use(express.static("public"));


app.get("/", (req, res) =>{
    res.render("index.ejs")



})

app.get("/about", (req, res) =>{
    res.render("about.ejs")
})


app.get("/contact", (req, res) =>{
    res.render("contact.ejs")
})


app.get("/products", (req, res) =>{
    res.render("products.ejs")
})

app.get("/resources", (req, res) =>{
    res.render("resources.ejs")
})

app.listen(port, ()=> {
    console.log(`server is running at port ${port}.`);
});