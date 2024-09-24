import { Link } from "react-router-dom";


export default function Layout () {
    return (
        <>

        <na className="navbar navbar-expand navbar-light bg light">
            <ul className="nav navbar-nav">
                <li className="nav-item">
                    <Link to={'/'} className="nav-link">List</Link>
                </li>
            </ul>
        </na>
        </>
    );
};

