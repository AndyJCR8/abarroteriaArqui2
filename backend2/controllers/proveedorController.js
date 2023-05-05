import proveedor from "../models/Proveedor.js"

async function getProveedores(req, res) {
  try {
    const Proveedores = await proveedor.findAll()
    res.json(Proveedores)
  } catch (error) {
    res.json({message: error.message})
  }
}

async function getProveedor(req, res) {
  try {
    const Proveedor = await proveedor.findOne({
      where: {
        IdProveedor: req.query.id
      }
    })
    res.json(Proveedor ?? {})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function postProveedor(req, res) {
  try {
    const postRes = await proveedor.create(req.body)
    res.json({message: "Tipo proveedor creado con éxito", data: postRes})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function updateProveedor(req, res) {
  try {
    await proveedor.update(req.body, {
      where: {
        IdProveedor: req.query.id
      }
    })
    res.json({message: "Tipo proveedor actualizado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

async function deleteProveedor(req, res) {
  try {
    await proveedor.destroy({
      where: {
        IdProveedor: req.query.id
      }
    })
    res.json({message: "Tipo proveedor eliminado con éxito"})
  } catch (error) {
    res.json({message: error.message})
  }
}

const Methods = [
  { path: "/proveedor/findAll", method: getProveedores, type: 1 },
  { path: "/proveedor/findOne", method: getProveedor, type: 1 },
  { path: "/proveedor/create", method: postProveedor, type: 2 },
  { path: "/proveedor/update", method: updateProveedor, type: 3 },
  { path: "/proveedor/delete", method: deleteProveedor, type: 4 }
]

export default Methods