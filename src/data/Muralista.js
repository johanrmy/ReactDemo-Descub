import axios from "axios";

const MuralistaApi = async(id, state) =>{
    try{
        const peticion = await axios.get(`http://localhost:8080/muralista/getMuralista/${id}`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    MuralistaApi
}