const express = require('express')
const { json } = require('sequelize')
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

routes.post('/:tip', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(req.params.tip == 1){
            conn.query('INSERT INTO tblproducto set ?',[req.body], (err, rows)=>{
                if(err) return res.send(err)
                res.json('producto insertado')
            })
        }
        else{
            res.json('Credenciales inválidas')
        }
    })
})

routes.put('/:id/:tip', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(req.params.tip == 1){
            if(err) return res.send(err)
            conn.query('UPDATE tblproducto set ? WHERE IdProducto = ?',[req.body, req.params.id], (err, rows)=>{
                if(err) return res.send(err)
                res.json('Producto Actualizado')
            })
        }
        else{
            res.json('Credenciales inválidas')
        }
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

routes.post('/suc/:tip', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        if(req.params.tip == 1){
            conn.query('INSERT INTO tblproductosucursal set ?',[req.body], (err, rows)=>{
                if(err) return res.send(err)
                res.json('producto insertado')
            })
        }
        else{
            res.json('Credenciales inválidas')
        }
    })
})

routes.put('/suc/:id/:tip', (req, res)=>{
    req.getConnection((err, conn)=>{
        if(err) return res.send(err)
        if(req.params.tip == 1){
            conn.query('UPDATE tblproductosucursal set ? WHERE IdProductoSucursal = ?',[req.body, req.params.id], (err, rows)=>{
                if(err) return res.send(err)
                res.json('Producto Actualizado')
            })
        }
        else{
            res.json('Credenciales inválidas')
        }
    })
})

module.exports = routes