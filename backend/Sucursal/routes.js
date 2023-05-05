const express = require('express')
const routes = express.Router()


//----------------------------CRUD SUCURSALES
routes.get('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('Select * from tblsucursal', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tblsucursal set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.json('producto insertado')
        })
    })
})

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE tblsucursal set ? WHERE  = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json('Libro Actualizado')
        })
    })
})

module.exports = routes