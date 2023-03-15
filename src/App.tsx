import { Route, Routes } from "react-router-dom";
import "./App.css";
import About from "./routes/About";
import Contact from "./routes/Contact";
import Experience from "./routes/Experience";
import HomePage from "./routes/Homepage";
import Navbar from "./components/navbar/Navbar";
import NotFoundPage from "./routes/NotFoundPage";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/Experience" element={<Experience />} />
        <Route path="/Contact" element={<Contact />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
