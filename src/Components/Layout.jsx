import { Link, Outlet } from "react-router-dom";

export default function Layout() {
  return (
    <>
      <nav className="navbar navbar-expand navbar-light bg light">
        <ul className="nav navbar-nav">
          <li className="nav-item">
            <Link to={"/"} className="nav-link">
              List
            </Link>
          </li>

          <li className="nav-item">
            <Link to={"/todo/create"} className="nav-link">
              Create
            </Link>
          </li>


        </ul>
      </nav>

      <div className="container w-75 my-5">
        <Outlet />
      </div>
    </>
  );
}
