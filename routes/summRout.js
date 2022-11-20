const express = require ('express')
const router = express.Router()

router.post('/summ', (req, res) =>{
    try {
        console.log("ОЙООЙ ПОСТ ЗАПРОС")
        const {number1, number2} = req.body
        return res.json({message: `Результат: ${Number(number1) + Number(number2)}`})
    } catch (e) {
        res.send({message: "Что-то пошло не так на сервере"})
        throw e
    }
})

module.exports = router