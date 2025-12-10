import { db } from "../data/data.js";

import {doc, getDoc, getDocs, addDoc, collection, updateDoc, deleteDoc} from "firebase/firestore";

export function obtenerProductoPorId(id) {
  return new Promise(async (res, rej) => {
    try{  
      const docRef = doc(db, "products", id);
      const docSnap = await getDoc(docRef);

      if (docSnap.exists()) {
        console.log("Datos del documento:", docSnap.data());
        res(docSnap.data())
        res({ id: docSnap.id, ...docSnap.data() });
      } else {
        console.log("No existe tal documento!");
        res()
        res(null);
      }      
    }catch(error){
      rej("No se ha podido obtener el producto ", error)
    }
  })
}


export function obtenerProductos() {
  return(
    new Promise(async (res, rej) => {
      try{
        const querySnapshot = await getDocs(collection(db, "products"));
        const productos = []
        querySnapshot.forEach((doc) => {
          console.log(doc.id, "=>", doc.data());
          productos.push({...doc.data(), id: doc.id})
        });
        res(productos)
      }catch(error){
        console.log(error)
        rej("No se ha podido obtener los productos ", error)
      }
    })
  )  
}


export function agregarProducto(producto) {
  return (
    new Promise(async (res, rej) => {
      try{
        const docRef = await addDoc(collection(db, "products"), producto);
        res({...producto, id: docRef.id})
      }catch(error){
        console.log(error);
        rej("No se ha podido agregar el producto ", error)
      }

    }

  )
)
  
}


export function eliminarProducto(id){
  return(
    new Promise(async (res, rej) => {
       try{
          await deleteDoc(doc(db, "products", id))
          console.log("Producto eliminado")
          res()
        }catch(error){
          console.log(error)
          rej("No se ha podido eliminar el producto ", error)
        }
      })
    )
}

