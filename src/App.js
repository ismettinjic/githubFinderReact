import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import Navbar from "./components/layout/Navbar";
import Footer from "./components/layout/Footer";
import Home from "./pages/Home"
import About from "./pages/About"
import NotFound from "./pages/NotFound"
import { GithubProvider } from "./context/github/GithubContext";
import { AlertProvder } from "./context/aler/AlertContext";
import Alert from "./components/layout/Alert";
import User from "./pages/User";


function App() {
  return (
    <GithubProvider>
    <AlertProvder>    
    <Router>
      <div className="flex flex-col justify-between h-screen">
        <Navbar></Navbar>
        <main className="container mx-auto px-3">
          <Alert></Alert>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/user/:login' element={<User />} />
            <Route path='/notfound' element={<NotFound />} />
            <Route path='/*' element={<NotFound />} />
          </Routes>
        </main>
        <Footer></Footer>
      </div>  
    </Router>
    </AlertProvder>
    </GithubProvider>
  );
}

export default App;
