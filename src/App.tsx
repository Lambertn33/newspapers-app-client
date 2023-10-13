import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import { NewsPaper, ManageNewsPaper, NewsPapers } from "./pages/newspapers";
import { Publisher, Publishers, ManagePublisher } from "./pages/publishers";
import Header from "./components/Header/Header";
import Home from "./pages/Home";

const App = () => {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />

        <Route path="newspapers" element={<NewsPapers />} />
        <Route path="newspapers/:id" element={<NewsPaper />} />
        <Route path="newspapers/manage" element={<ManageNewsPaper />} />

        <Route path="publishers" element={<Publishers />} />
        <Route path="publishers/:id" element={<Publisher />} />
        <Route path="publishers/manage" element={<ManagePublisher />} />
      </Routes>
    </Router>
  );
};

export default App;
