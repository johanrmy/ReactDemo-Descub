import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import { Auth0Provider } from "@auth0/auth0-react";
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
       <Auth0Provider
       domain="ariana15.us.auth0.com"  
       clientId="QaqKWnoY7vElm9EsOnqTYkVLZePn6IZb"  
       redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>
  </React.StrictMode>,
)
