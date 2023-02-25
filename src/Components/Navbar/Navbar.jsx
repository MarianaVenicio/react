import CartWidget from "../CartWidget/CartWidget";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-light">
      <div className="container-fluid">
      <img src="https://res.cloudinary.com/dbkoxmpas/image/upload/c_scale,h_143,w_182/v1677330221/2_7_2022_2_07_03_p._m._hejxyj.png" />
        <a className="navbar-brand" href="some">
          ECOSWITCH
        </a>
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon" />
        </button>
        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav">
            <li className="nav-item">
              <a className="nav-link" href="some">
                HOME
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="some">
                FACIAL
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="some">
                CORPORAL
              </a>
            </li>
          </ul>
        </div>
        <CartWidget />
      </div>
    </nav>
  );
};

export default Navbar;
