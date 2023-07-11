import Home from './routes/Home.jsx';
import Auth from './routes/Auth.jsx';
import Murales from './routes/Murales.jsx';
import Mapeo from './routes/Mapeo.jsx';
import Estadisticas from './routes/Estadisticas.jsx';
import Muralista from './routes/Muralista.jsx';
import Mural from './routes/Mural.jsx';
import NotFound from './routes/404.jsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';

const user = {id:1,nombre:"johan"}
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home isAllowed={!!user}/>,
  },
  {
    path: "/tusmurales/",
    element: <ProtectedRoute isAllowed={!!user}><Murales/></ProtectedRoute>,
  },
  {
    path: "/mapear/",
    element: <ProtectedRoute isAllowed={!!user}><Mapeo /></ProtectedRoute>,
  },
  {
    path: "/mural/:id",
    element: <ProtectedRoute isAllowed={!!user}><Mural /></ProtectedRoute>,
  },
  {
    path: "/estadisticas",
    element: <ProtectedRoute isAllowed={!!user}><Estadisticas /></ProtectedRoute>,
  },
  {
    path: "/muralista/:id",
    element: <ProtectedRoute isAllowed={!!user}><Muralista /></ProtectedRoute>,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path:"*", 
    element: <NotFound />,
  },
]);


function App() {

  return (
    <>
    <RouterProvider router={router} ></RouterProvider>
    </>
  );
}

export default App
