import axios from "axios";

const ScaneosApi = async(id, state) =>{
    try{
        const peticion = await axios.get(`http://localhost:8080/mural/scansPorIdMuralista/${id}`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    ScaneosApi
}