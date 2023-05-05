const express = require('express')
const routes = express.Router()


//----------------------------CRUD SUCURSALES
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('Select * from tblusuario', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tblusuario  set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.json('Usuario insertado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE tblusuario set ? WHERE IdUsuario = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json('Usuario Actualizado')
        })
    })
})

module.exports = routes