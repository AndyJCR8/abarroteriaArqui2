import encabezadoFactura from "../models/EncabezadoFactura.js"
import usuario from "../models/Usuario.js"

async function verifyUser(IdUsuario) {
  if(IdUsuario == null) throw new Error("IdUsuario inválido")

  const Usuario = await usuario.findOne({where: { "IdUsuario": IdUsuario }})
  
  if(Usuario == null || Usuario.IdTipoUsuario > 2) throw new Error("Usuario inválido")
}

async function getEncabezados(req, res) {
  try {
    
    await verifyUser(req.query.IdUsuario)

    const Encabezados = await encabezadoFactura.findAll()
    res.json(Encabezados)
  } catch (error) {
    res.json({message: error.message})
  }
}

async function getEncabezado(req, res) {
  try {
    await verifyUser(req.query.IdUsuario)
    const encabezadoFactura = await encabezadoFactura.findOne({
      where: {
        IdEncabezadoFact: req.query.id
      }
    })
    res.json(encabezadoFactura ?? {})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function postEncabezado(req, res) {
  try {
    
    await verifyUser(req.body.IdUsuario)

    const postRes = await encabezadoFactura.create(req.body)
    res.json({message: "Encabezado factura creado con éxito", data: postRes})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function updateEncabezado(req, res) {
  try {
    await verifyUser(req.body.IdUsuario)
    await encabezadoFactura.update(req.body, {
      where: {
        IdEncabezadoFact: req.query.id
      }
    })
    res.json({message: "Encabezado factura actualizado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function deleteEncabezado(req, res) {
  try {
    await verifyUser(req.body.IdUsuario)
    await encabezadoFactura.destroy({
      where: {
        IdEncabezadoFact: req.query.id
      }
    })
    res.json({message: "Encabezado factura eliminado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

const Methods = [
  { path: "/encabezadoFactura/findAll", method: getEncabezados, type: 1 },
  { path: "/encabezadoFactura/findOne", method: getEncabezado, type: 1 },
  { path: "/encabezadoFactura/create", method: postEncabezado, type: 2 },
  { path: "/encabezadoFactura/update", method: updateEncabezado, type: 3 },
  { path: "/encabezadoFactura/delete", method: deleteEncabezado, type: 4 }
]

export default Methods