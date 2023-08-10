import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navbar ,Home,Searchdata, ChannelDetail,VideoDetail } from "./Container/Export";
export const App = () => {
  return (
    <>
      <Router>
        <Navbar/>
        <Routes>
          <Route exact path="/" element={Home} />
          <Route path="/Video/:id" element={<VideoDetail />} />
          <Route path="/Channel/:id" element={<ChannelDetail />} />
          <Route path="/Search/:searchRes" element={<Searchdata />} />
        </Routes>
      </Router>
    </>
  );
};
export default App;
