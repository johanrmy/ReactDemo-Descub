import { useAuth0 } from "@auth0/auth0-react";

import { LoginButton } from "../components/LoginButton";
import { LogoutButton } from "../components/LogoutButton";
import { Profile } from "../components/ProfileAuth";


function Auth() {
  const { isAuthenticated } = useAuth0();

  return (
    <div className="App">
      <header className="App-header">
        {isAuthenticated ? (
          <>
            <Profile />
            <LogoutButton />
          </>
        ) : (
          <LoginButton />
        )}
      </header>
    </div>
  );
}

export default Auth;