import axios from "axios";

const MuralesApi = async(id, state) =>{
    try{
        const peticion = await axios.get(`http://localhost:8080/mural/getMuralesByIdMuralista/${id}`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    MuralesApi
}