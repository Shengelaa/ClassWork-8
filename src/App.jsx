import { Routes, Route, Link } from "react-router-dom";
import Header from "./Components/Header";
import AboutUs from "./Components/AboutUs";
import Impact from "./Components/Impact";
import Locations from "./Components/Locations";
import Projects from "./Components/Projects";
import SignIn from "./Components/SignIn";
import SignUp from "./Components/SignUp";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path='/SignIn' element={<SignIn />} />
        <Route path='/SignUp' element={<SignUp />} />
        <Route path='/AboutUs' element={<AboutUs />} />
        <Route path='/Projects' element={<Projects />} />
        <Route path='/Locations' element={<Locations />} />{" "}
        <Route path='/Impact' element={<Impact />} />
      </Routes>
    </>
  );
}

export default App;
