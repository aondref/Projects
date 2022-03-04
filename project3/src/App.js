import { Routes, Route } from "react-router-dom";
import Home from './pages/home';
import About from './pages/about';
import Portfolio from './pages/portfolio';
import Blog from './pages/blog';
import Navigation from './components/navigation';
import JourneySoFar from "./components/blogPosts/journey-so-far";

function App() {
  return (
    <div className="vh-100">
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/portfolio" element={<Portfolio />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/blog/posts/journey-so-far" element={<JourneySoFar />} />
        <Route path="*" 
          element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          } 
        />
      </Routes>
    </div>
  );
}

export default App;
