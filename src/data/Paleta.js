import axios from "axios";

const PaletaApi = async(id, state) =>{
    try{
        const peticion = await axios.get(`http://localhost:8080/paleta/getPaletaMural/${id}`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    PaletaApi
}