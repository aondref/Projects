import { Link, Outlet } from "react-router-dom";

function Portfolio() {
  return (
      <div>
          <h1>Welcome to my Portfolio</h1>
          <nav>
              <Link to="Portfolio/SWEPortfolio">SWE Portfolio</Link>
              <Link to="Portfolio/3DPortfolio">3D Art Portfolio</Link>
          </nav>
          <Outlet />
      </div>
  )
}

export default Portfolio;
