import tipoProveedor from "../models/TipoProveedor.js";

async function getProveedores(req, res) {
  try {
    const Tipos = await tipoProveedor.findAll()
    res.json(Tipos)
  } catch (error) {
    res.json({message: error.message})
  }
}

async function getProveedor(req, res) {
  try {
    const Tipo = await tipoProveedor.findOne({
      where: {
        IdTióProveedor: req.query.id
      }
    })
    res.json(Tipo ?? {})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function postProveedor(req, res) {
  try {
    const postRes = await tipoProveedor.create(req.body)
    res.json({message: "Tipo proveedor creado con éxito", data: postRes})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function updateProveedor(req, res) {
  try {
    await tipoProveedor.update(req.body, {
      where: {
        IdTióProveedor: req.query.id
      }
    })
    res.json({message: "Tipo proveedor actualizado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function deleteProveedor(req, res) {
  try {
    await tipoProveedor.destroy({
      where: {
        IdTióProveedor: req.query.id
      }
    })
    res.json({message: "Tipo proveedor eliminado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

const Methods = [
  { path: "/tipoProveedor/findAll", method: getProveedores, type: 1 },
  { path: "/tipoProveedor/findOne", method: getProveedor, type: 1 },
  { path: "/tipoProveedor/create", method: postProveedor, type: 2 },
  { path: "/tipoProveedor/update", method: updateProveedor, type: 3 },
  { path: "/tipoProveedor/delete", method: deleteProveedor, type: 4 }
]

export default Methods