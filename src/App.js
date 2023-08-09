import React, { useState } from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";

//react-router
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

//toast
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.min.css";

//firebase
import firebase from "firebase/compat/app"; // Import the compat version of 'firebase/app'
import "firebase/compat/auth"; // Import specific Firebase services you need

//components

import Home from './Pages/Home';
import PageNotFound from './Pages/NotfoundPage';
import Signin from './Pages/Signin';
import Signup from './Pages/Signup';
import { UserContext } from "./Context/Usercontext";
import Footer from "./layout/Footer";
import Header from "./layout/Header";
import FirebaseConfig from "./Config/FirebaseConfig";


firebase.initializeApp(FirebaseConfig)

const App = () => {
  const [user, setUser] = useState(null);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(prevDarkMode => !prevDarkMode);
  };
 
  return (
    <BrowserRouter>
      <ToastContainer />
      <UserContext.Provider value={{ user, setUser }}>
        <Header/>
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/signin" element={<Signin />} />
          <Route exact path="/signup" element={<Signup />} />
          <Route exact path="*" element={<PageNotFound />} />
        </Routes>
        <Footer />
      </UserContext.Provider>
    </BrowserRouter>
  );
};

export default App;
