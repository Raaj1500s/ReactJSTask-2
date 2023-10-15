import './App.css';

import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Header from './components/Header';
import {Footer} from "./components/Footer";
import Nav from "./components/Nav";
import {Blog,Contact,Projects,Home} from "./components/Main";
import {HashRouter,Routes,Route} from "react-router-dom"
function App() {
  return (
    <div>
      
      
      <Header></Header>
      <Footer></Footer>
      <HashRouter>
      <Nav></Nav>
        <Routes>
          <Route path="/Home" element={<Home />}/>
          <Route path="/projects" element={<Projects />}/>
          <Route path="/contact" element={<Contact />}/>
          <Route path="/blog" element={<Blog />}/>
        </Routes>
      </HashRouter>
    </div>
  );
}

export default App;
