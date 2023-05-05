import detalleFactura from "../models/DetalleFactura.js"
import usuario from "../models/Usuario.js"

async function verifyUser(IdUsuario) {
  if(IdUsuario == null) throw new Error("IdUsuario inválido")

  const Usuario = await usuario.findOne({where: { "IdUsuario": IdUsuario }})
  
  if(Usuario == null || Usuario.IdTipoUsuario > 2) throw new Error("Usuario inválido")
}

async function getDetalles(req, res) {
  try {
    await verifyUser(req.query.IdUsuario)
    const Detalles = await detalleFactura.findAll()
    res.json(Detalles)
  } catch (error) {
    res.json({message: error.message})
  }
}

async function getDetalle(req, res) {
  try {
    await verifyUser(req.query.IdUsuario)
    const Detalle = await detalleFactura.findOne({
      where: {
        IdDetalleFact: req.query.id
      }
    })
    res.json(Detalle ?? {})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function postDetalle(req, res) {
  try {
    await verifyUser(req.body.IdUsuario)
    const postRes = await detalleFactura.create(req.body)
    res.json({message: "Detalle creado con éxito", data: postRes})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function updateDetalle(req, res) {
  try {
    await verifyUser(req.body.IdUsuario)
    await detalleFactura.update(req.body, {
      where: {
        IdDetalleFact: req.query.id
      }
    })
    res.json({message: "Detalle actualizado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function deleteDetalle(req, res) {
  try {
    await verifyUser(req.body.IdUsuario)
    await detalleFactura.destroy({
      where: {
        IdDetalleFact: req.query.id
      }
    })
    res.json({message: "Detalle eliminado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

const Methods = [
  { path: "/detalleFactura/findAll", method: getDetalles, type: 1 },
  { path: "/detalleFactura/findOne", method: getDetalle, type: 1 },
  { path: "/detalleFactura/create", method: postDetalle, type: 2 },
  { path: "/detalleFactura/update", method: updateDetalle, type: 3 },
  { path: "/detalleFactura/delete", method: deleteDetalle, type: 4 }
]

export default Methods