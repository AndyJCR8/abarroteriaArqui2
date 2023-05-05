import tipoProducto from "../models/TipoProducto.js"

async function getProductos(req, res) {
  try {
    const Tipos = await tipoProducto.findAll()
    res.json(Tipos)
  } catch (error) {
    res.json({message: error.message})
  }
}

async function getProducto(req, res) {
  try {
    const Tipo = await tipoProducto.findOne({
      where: {
        IdTipoProducto: req.query.id
      }
    })
    res.json(Tipo ?? {})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function postProducto(req, res) {
  try {
    const postRes = await tipoProducto.create(req.body)
    res.json({message: "Tipo producto creado con éxito", data: postRes})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function updateProducto(req, res) {
  try {
    await tipoProducto.update(req.body, {
      where: {
        IdTipoProducto: req.query.id
      }
    })
    res.json({message: "Tipo producto actualizado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function deleteProdcuto(req, res) {
  try {
    await tipoProducto.destroy({
      where: {
        IdTipoProducto: req.query.id
      }
    })
    res.json({message: "Tipo producto eliminado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

const Methods = [
  { path: "/tipoProducto/findAll", method: getProductos, type: 1 },
  { path: "/tipoProducto/findOne", method: getProducto, type: 1 },
  { path: "/tipoProducto/create", method: postProducto, type: 2 },
  { path: "/tipoProducto/update", method: updateProducto, type: 3 },
  { path: "/tipoProducto/delete", method: deleteProdcuto, type: 4 }
]

export default Methods