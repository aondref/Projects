import { Routes, Route } from "react-router-dom";
import HomePage from './components/pages/HomePage';
import AboutPage from './components/pages/about/AboutPage';
import PortfolioPage from './components/pages/portfolio/PortfolioPage';
import BlogPage from './components/pages/blog/BlogPage';
import Navigation from './components/Navigation';

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/blog" element={<BlogPage />} />
      </Routes>
    </div>
  );
}

export default App;
