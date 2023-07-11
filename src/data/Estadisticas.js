import axios from "axios";

const EstadisticasApi = async(state) =>{
    try{
        const peticion = await axios.get(`http://localhost:8080/mural/ScansPorMes`)
        state(peticion)    
    }catch{
        console.error("Error en la conexión de la API")
    }
}

export{
    EstadisticasApi
}