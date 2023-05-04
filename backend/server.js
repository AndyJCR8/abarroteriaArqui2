const express = require('express')
const mysql = require('mysql')
const myconn = require('express-myconnection')
const routes = require('./inventario/routes')
const cors = require('cors')


const app = express()
const dbOptions = {
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: '',
    database: 'bddiariovivir'
}

app.set('port', process.env.PORT||9000)

app.use(myconn(mysql, dbOptions,'single'))
app.use(express.json())
app.use(cors())


app.get('/',(req,res)=>{
    res.send('Hola')
})
app.use('/api', routes)

app.listen(app.get('port'), ()=>{
    console.log('Servidor activado ',app.get('port'))
})