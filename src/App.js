
import './App.css';
//import "antd/dist/antd.css";
import { BrowserRouter ,Route ,Routes } from "react-router-dom";
import About from './components/shared/pages/about';
import Home from './components/shared/pages/home';
import Contact from './components/shared/pages/contact';
import Help from './components/shared/pages/help';
import Header from './components/shared/header';
import Footer from './components/shared/footer';


function App() {
  return (
    <>
     <BrowserRouter>
     <Header />
      <Routes>
          <Route index element={<Home />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          <Route path="help" element={<Help />} />
      </Routes>
   </BrowserRouter>
   <Footer />
    </>
  );
}

export default App;
