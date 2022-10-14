import React from "react";
import { Container } from "@material-ui/core";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
// import { GoogleOAuthProvider } from "@react-oauth/google";

import Navbar from "./components/Navbar/Navbar";
import Home from "./components/Home/Home";
import Auth from "./components/Auth/Auth";

const App = () => {
  return (
    <Router>
      <Container maxWidth="lg">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<Auth />} />
        </Routes>
      </Container>
    </Router>
  );
};

export default App;

// {/* <GoogleOAuthProvider
//   clientId={
//     "934775244000-s4b3e13b0og7rcmilsprcqrp3lf215ah.apps.googleusercontent.com"
//   }
// ></GoogleOAuthProvider>; */}
