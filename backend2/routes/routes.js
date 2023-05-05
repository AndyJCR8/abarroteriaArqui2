import express from "express";
import tipoProductoMehotds from "../controllers/tipoProductoController.js";
import tipoProveedorMethods from "../controllers/tipoProveedorController.js";
import proveedorMethods from "../controllers/proveedorController.js";
import encabezadoFactMethods from "../controllers/encabezadoFacturaController.js";
import detalleMethods from "../controllers/detalleFacturaController.js";

const router = express.Router()

tipoProveedorMethods.forEach(data => {
  switch(data.type) {
    case 1: router.get(data.path, data.method); break;
    case 2: router.post(data.path, data.method); break;
    case 3: router.put(data.path, data.method); break;
    case 4: router.delete(data.path, data.method); break;
  }
})

tipoProductoMehotds.forEach(data => {
  switch(data.type) {
    case 1: router.get(data.path, data.method); break;
    case 2: router.post(data.path, data.method); break;
    case 3: router.put(data.path, data.method); break;
    case 4: router.delete(data.path, data.method); break;
  }
})

proveedorMethods.forEach(data => {
  switch(data.type) {
    case 1: router.get(data.path, data.method); break;
    case 2: router.post(data.path, data.method); break;
    case 3: router.put(data.path, data.method); break;
    case 4: router.delete(data.path, data.method); break;
  }
})

encabezadoFactMethods.forEach(data => {
  switch(data.type) {
    case 1: router.get(data.path, data.method); break;
    case 2: router.post(data.path, data.method); break;
    case 3: router.put(data.path, data.method); break;
    case 4: router.delete(data.path, data.method); break;
  }
})

detalleMethods.forEach(data => {
  switch(data.type) {
    case 1: router.get(data.path, data.method); break;
    case 2: router.post(data.path, data.method); break;
    case 3: router.put(data.path, data.method); break;
    case 4: router.delete(data.path, data.method); break;
  }
})



export default router