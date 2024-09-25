import React, { useState } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { GlobalProvider } from './context/globalContext';
import { GlobalStyle } from './styles/GlobalStyle';
import GoogleLoginComponent from './Components/GoogleLoginComponent';

const root = ReactDOM.createRoot(document.getElementById('root'));

function Main() {
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Manage login state
  const [user, setUser] = useState(null); // Store user info

  // Function to handle login success
  const handleLoginSuccess = (user) => {
    setIsLoggedIn(true); // Update login state
    setUser(user); // Optionally store user data if needed
  };

  return (
    <React.StrictMode>
      <GlobalStyle />
      <GlobalProvider>
        {!isLoggedIn ? (
          // Show Google login component until user signs in
          <GoogleLoginComponent onLoginSuccess={handleLoginSuccess} />
        ) : (
          // Show the main app once user is logged in
          <App user={user} />  
        )}
      </GlobalProvider>
    </React.StrictMode>
  );
}

root.render(<Main />);
