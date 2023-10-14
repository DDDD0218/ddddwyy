import React from "react";
import Homepage from "./view/Homepage";
import { Routes, Route } from "react-router-dom";
import LazyComponent from "./components/LazyComponents";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<LazyComponent path="Navigation" />}>
          <Route index element={<Homepage />} />
          <Route path="Ranking" element={<LazyComponent path="Ranking" />} />
          <Route path="Mine" element={<LazyComponent path="Mine" />} />
          <Route
            path="Concerned"
            element={<LazyComponent path="Concerned" />}
          />
          <Route
            path="Community"
            element={<LazyComponent path="Community" />}
          />
        </Route>
        <Route path="Search" element={<LazyComponent path="Search" />} />
        <Route
          path="Detailedlist/:id"
          element={<LazyComponent path="Detailedlist" />}
        />
        <Route
          path="Videoplay/:id"
          element={<LazyComponent path="Videoplay" />}
        />
        <Route path="Audioplay" element={<LazyComponent path="Audioplay" />} />
      </Routes>
    </>
  );
}

export default App;
