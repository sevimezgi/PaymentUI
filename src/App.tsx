import React from "react";
import "./App.css";
// import "video.js/dist/video-js.css";
// import "video.js/dist/video-js.min.css";

import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import Cart from "./pages/Cart/Cart";
import VideoPage from "./pages/Video/VideoPage";
import Navbar from "./components/Navbar/Navbar";
import FailComponent from "./components/FailSuccesPages/FailComponent";
import SuccessComponent from "./components/FailSuccesPages/SuccessComponent";
import { Provider } from "react-redux";
import { store } from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <div className="app flex flex-col bg-lightGrey1 text-textColor pb-10">
        <Router>
          <>
            <Navbar />
          </>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/video" element={<VideoPage />} />
            <Route path="/fail" element={<FailComponent/>} />
            <Route path="/success" element={<SuccessComponent/>} />
          </Routes>
        </Router>
      </div>
    </Provider>
  );
};

export default App;
