import React from "react";
import { useAuth0 } from "@auth0/auth0-react";

export const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return <div className="btn btn-danger descub-submit-form" onClick={() => loginWithRedirect()}>Inicia Sesión</div>;
};