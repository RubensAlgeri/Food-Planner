import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate
} from "react-router-dom";

import { AuthProvider } from "./contexts/auth";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Home from "./pages/Home"


import GlobalStyle from "./styles/GlobalStyle";

const App = () => {
  const Private = ({ children }) => {
    const authenticated = localStorage.getItem("user");

    if (!authenticated) {
      return <Navigate to="/" />;
    }

    return children;
  };

  return (
    <Router>
      <AuthProvider>
        <GlobalStyle />
        <Routes>
          <Route exact path="/" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<Private> <Home /> </Private>} />

        </Routes>
      </AuthProvider>
    </Router>

  );
};

export default App;