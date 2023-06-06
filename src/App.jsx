import Home from './routes/Home.jsx';
import Auth from './routes/Auth.jsx';
import Murales from './routes/Murales.jsx';
import Mapeo from './routes/Mapeo.jsx';
import Estadisticas from './routes/Estadisticas.jsx';
import Muralista from './routes/Muralista.jsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';

const router = createBrowserRouter([

  {
    path: "/",
    element: <Home/>
  },
  {
    path: "/tusmurales",
    element: <Murales/>
  },
  {
    path: "/mapear/:id_usuario", 
    element: <Mapeo/>
  },
  {
    path: "estadisticas",
    element: <Estadisticas/>
  },
  {
    path: "/muralista/:id",
    element: <Muralista/>
  },
  {
    path:"/login",
    element: <Login/>
  },
  {
    path:"/register",
    element: <Register/>
  },
  {
    path: "/auth",
    element: <Auth/>
  }
])


function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App
