import axios from "axios";

const MapearApi = async(id_usuario, state) =>{
    try{
        const peticion = await axios.get(`http://localhost:8080/mural/getMuralesIdUsuario/${id_usuario}`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    MapearApi
}