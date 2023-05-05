const express = require('express')
const routes = express.Router()

routes.get('/tipoprod', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('Select * from tbltipoproducto', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

//----------------------------CRUD PRODUCTO
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

routes.put('/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE tblproducto set ? WHERE IdProducto = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json('Producto Actualizado')
        })
    })
})


//----------------------------CRUD PRODUCTOSUCURSAL
routes.get('/suc', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('Select * from tblproductosucursal', (err, rows)=>{
            if(err) return res.send(err)
            res.json(rows)
        })
    })
})

routes.post('/suc', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('INSERT INTO tblproductosucursal set ?',[req.body], (err, rows)=>{
            if(err) return res.send(err)
            res.json('producto insertado')
        })
    })
})

routes.put('/suc/:id', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        conn.query('UPDATE tblproductosucursal set ? WHERE IdProductoSucursal = ?',[req.body, req.params.id], (err, rows)=>{
            if(err) return res.send(err)
            res.json('Producto Actualizado')
        })
    })
})

module.exports = routes