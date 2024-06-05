const express = require('express')
const app = express()
const PORT = 3000;



app.use(express.json());

app.get("/", (req, res) => {
    res.sendFile(__dirname + "./views/index.html");
});

app.get("/roomate", async (req, res) => {

});

app.post("/roomate", async (req, res) => {

});

app.get("/gastos", async (req, res) => {

});

app.put("/gastos", async (req, res) => {

});

app.delete("/gastos", async (req, res) => {

});




app.get("*", (req,res) => {
        res.send("Aqui no hay nada")
});    


    app.listen(PORT, () => {
        console.log(` El servidor está inicializado en el puerto ${PORT} ` )
        });

