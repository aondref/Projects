import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import DPortfolio from "./components/Portfolio/DPortfolio";
import Portfolio from "./components/Portfolio/Portfolio";
import SWEPortfolio from "./components/Portfolio/SWEPortfolio";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/Portfolio" element={<Portfolio />}>
          <Route path="Portfolio/SWEPortfolio" element={<SWEPortfolio />} />
          <Route path="Portfolio/3DPortfolio" element={<DPortfolio />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
