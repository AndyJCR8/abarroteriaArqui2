import tipoProducto from "../models/TipoProducto.js";

export const getTipos = async(req, res) => {
  try {
    const Tipos = await tipoProducto.findAll()
    res.json(Tipos)
  } catch (error) {
    res.json({message: error.message})
  }
}