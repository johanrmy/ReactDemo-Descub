import axios from "axios";

const TusMuralesApi = async(email_usuario, state) =>{
    try{
        const peticion = await axios.get(`http://localhost:8080/mural/getMuralesEmailUsuario/${email_usuario}`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    TusMuralesApi
}