import axios from "axios";

const AuthApi = async(id, state) =>{
    try{
        const peticion = await axios.get(`http://localhost:8080/usuario/buscar/${id}`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    AuthApi
}