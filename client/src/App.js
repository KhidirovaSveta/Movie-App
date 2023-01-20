import { Routes, Route } from "react-router-dom";
import Footer from "./layouts/footer";
import Header from "./layouts/header"
import Details from "./pages/details";
import Home from "./pages/home"

function App() {
  return (
    <div className="App">
      <Header/>
      <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/home/:imdbID" element={<Details/>}/>
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
