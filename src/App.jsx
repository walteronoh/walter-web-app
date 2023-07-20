import { Routes, Route } from 'react-router-dom';
import NavBar from './Navbar';
import Footer from './Footer'
import Home from "./Pages/Home";
import Blog from './Pages/Blog';
import Form from './Pages/Form';
import Skills from './Pages/Skills';
import Portfolio from './Pages/Portfolio';




export default function App() {
  return (
    <div class="dark:bg-slate-900 selection:bg-slate-700 ">
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/skills" element={<Skills />} />
        <Route path="/portfolio" element={<Portfolio />} />
        {/* <Route path="/blog" element={<Blog />} /> */}
        <Route path="/form" element={<Form />} />
      </Routes>
      <Footer />
    </div>
  );
}