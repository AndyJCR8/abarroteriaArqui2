const express = require('express')
const routes = express.Router()


//----------------------------CRUD TIPO USUARIOS
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('Select * from tbltipousuario', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tbltipousuario  set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.json('TIpo Usuario insertado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE tbltipousuario set ? WHERE IdTipoUsuario = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json('tipo de Usuario Actualizado')
        })
    })
})

module.exports = routes