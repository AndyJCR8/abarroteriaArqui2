const express = require('express')
const routes = express.Router()


//----------------------------CRUD SUCURSALES
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('Select * from tblproducto', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tblproducto set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.json('producto insertado')
        })
    })
})

routes.put('/prod/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE libros set ? WHERE idLibro = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json('Libro Actualizado')
        })
    })
})

module.exports = routes