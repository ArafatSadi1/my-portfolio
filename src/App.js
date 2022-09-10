import { Route, Routes } from "react-router-dom";
import BgAnim from "./components/BgAnim";
import Navbar from "./components/Navbar";
import "./index.css";
import About from "./routes/About";
import Blogs from "./routes/Blogs";
import Contact from "./routes/Contact";
import Home from "./routes/Home";
import ProjectDetails from "./routes/ProjectDetails";
import Projects from "./routes/Projects";

function App() {
  return (
    <div className="max-w-[1300px] mx-auto">
      <BgAnim></BgAnim>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projectDetails/:id" element={<ProjectDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/blogs" element={<Blogs />} />
      </Routes>
    </div>
  );
}

export default App;
