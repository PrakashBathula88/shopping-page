import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";
import Nav from "./Components/Nav/Nav";
import Cart from "./Components/Cart/CartItems.js";
import About from "./Components/About/About";
import { ProductProvider } from "./Components/AddCart/CartProviders.js";
import Albums from "./Components/Albums/Albums.js";
import Contact from "./Components/Contact/Contact.js";
import Signin from "./Components/Signin/Signin.jsx";
import Profile from "./Components/Profile/Profile.jsx";
import Private from "./Components/Private/Private.jsx";
import Home from "./Components/Home/Home.jsx";
import SinglePage from "../src/Components/SinglePage/SinglePage.jsx"
function App() {


  return (
    <>
      <ProductProvider>
        <Router>
          <Nav />
          <Routes>
            <Route element={<Private/>}>
            <Route path="/" element={<Home />} exact></Route>
            </Route>
            <Route path="singlepage/:id" element={<SinglePage />}></Route>
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/album" element={<Albums />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/Signin" element={<Signin />}></Route>
            <Route path="cart" element={<Cart/>}></Route>
          </Routes>
        </Router>
      </ProductProvider>
    </>
  );
}



export default App;
