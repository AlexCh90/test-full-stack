import React from "react";
import ReactDOM from 'react-dom';
import './styles/index.css';
import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import PageUn from "./pages/PageUn";
import Header from "./components/Header";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header></Header>
      <Banner></Banner>
      <div id="page-container">
        <div id="content-wrap">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/page1" element={<PageUn />}/>
          </Routes>
        </div>
      </div>
      <Footer></Footer>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
  )

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
