import { Link } from "react-router-dom";

function Navigation() {
  return (
    <nav class="navbar navbar-expand-lg navbar-light bg-light justify-content-center">
      <div class="container-fluid justify-content-center">
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse justify-content-center" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item">
              <Link class="nav-link" to="/">Home</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/about">About</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/portfolio">Portfolio</Link>
            </li>
            <li class="nav-item">
              <Link class="nav-link" to="/blog">Blog</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}

export default Navigation;
