import {agregarProducto, eliminarProducto, obtenerProductos} from "../models/products.models.js"

export const addProductService = async (product) => {
  return(
    new Promise(async (res, rej) => {
      try{
        const newProduct = await agregarProducto(product)
        res(newProduct)
      }catch(error){
        rej(error) 
      }
    })
  )
};


export const deleteProductService = async (id) => {
  console.log(id)
  return(
    new Promise(async (res, rej) => {
      try{
        await eliminarProducto(id)
        res()
      }catch(error){
        rej(error) 
      }
    })
  )
};
 

export const getAllProductsService = async () => {
  return(
    new Promise(async (res, rej) => {
      console.log("test2 dentro de servicio")
      try{
        const productos = await obtenerProductos()
        res(productos)
      }catch(error){
        rej(error) 
      }
    })
  )
};

export const getProductByIdService = async (id) => {
  return(
    new Promise(async (res, rej) => {
      try{
        const products = await obtenerProductos(id)
        res(products)
      }catch(error){
        rej(error) 
      }
    })
  )
  };


