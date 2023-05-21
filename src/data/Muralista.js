import axios from "axios";

const MuralistaApi = async(id, state) =>{
    const peticion = await axios.get(`http://localhost:8080/muralista/getMuralista/${id}`)
    state(peticion)
}

export{
    MuralistaApi
}