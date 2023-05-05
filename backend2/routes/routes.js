import express from "express";
import { getTipos } from "../controllers/tipoProductoController.js";

const router = express.Router()

router.get('/tiposProducto', getTipos)



export default router