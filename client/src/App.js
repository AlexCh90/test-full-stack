import '../App.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <Header></Header>
      <Banner></Banner>
      
      <Footer></Footer>
    </div>
  );
}

export default App;
