import Home from './routes/Home.jsx';
import Auth from './routes/Auth.jsx';
import Murales from './routes/Murales.jsx';
import Mapeo from './routes/Mapeo.jsx';
import Estadisticas from './routes/Estadisticas.jsx';
import Muralista from './routes/Muralista.jsx';
import { createBrowserRouter, RouterProvider} from "react-router-dom";
import Login from './routes/Login.jsx';
import Register from './routes/Register.jsx';
import { ProtectedRoute } from './components/ProtectedRoute.jsx';

const user = null
const router = createBrowserRouter([
  {
    path: "/",
    element: <Home isAllowed={!!user}/>,
  },
  {
    path: "/tusmurales",
    element: <ProtectedRoute isAllowed={!!user}><Murales/></ProtectedRoute>,
  },
  {
    path: "/mapear/:id_usuario",
    element: <ProtectedRoute isAllowed={!!user}><Mapeo /></ProtectedRoute>,
  },
  {
    path: "estadisticas",
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
    path: "/auth",
    element: <Auth />,
  },
]);


function App() {

  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App
