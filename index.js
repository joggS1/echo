const express = require("express")
const app = express()
const router = require("./routes/summRout")
require('dotenv').config()
const PORT = process.env.PORT || 8080

app.use(express.json())
app.use("/", router)

async function start (){
    try {
        app.listen(PORT, () => {
        console.log(`слушаю порт ${PORT}`);
        })
    } catch (e) {
        console.log(e);
    }

}
start()

app.get("/", (req, res) => {
    console.log('УРА ГЕТ ЗАПРОС!');
    res.send('приветики!!')
})