import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand-sm navbar-light bg-light">
        <div className="container">
          <a className="navbar-brand" href="#">
            <Link to={"/"} className="nav-link fw-bolder">
              Todo List Api APP
            </Link>
          </a>

          <ul className="navbar-nav me-auto mt-2 mt-lg-0">
            <li className="nav-item">
              <Link to={"/"} className="nav-link fw-bolder">
                List
              </Link>
              <span className="visually-hidden">(current)</span>
            </li>
         
         
          </ul>
        </div>
      </nav>

      <div className="container w-75 my-5">
        <Outlet />
      </div>
    </>
  );
}
