const express= require("express")
import { dirname, join } from "path"
import { fileURLToPath } from "url"

const app = express() 

const __dirname = dirname(fileURLToPath(import.meta.url))

app.set('views', join (__dirname, 'views'))
app.set("view engine", "ejs")

app.get("/",(req, res)=>{
    res.render("index")
})

app.get("/servicios",(req, res)=>{
    res.render("servicios")
})

app.get("/contacto",(req, res)=>{
    res.render("contacto")
})


app.listen(3000,(req, res)=>{
    console.log("Server is listening on port 3000")
})