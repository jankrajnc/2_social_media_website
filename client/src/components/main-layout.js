import { Link } from 'react-router-dom';
import style from './main-layout.module.css';

function MainLayout(props) {

    return (
        <div>

            {/* Navigation bar */}
            <nav className="navbar navbar-expand-sm bg-dark navbar-dark p-2">
                <span className="navbar-brand py-0 d-inline-block align-center me-3">
                    <Link to='/home' className={style.link}>Test</Link>
                </span>
                {/* Links left side */}
                <ul className="navbar-nav me-auto">
                    <li className="nav-item">
                        <Link to='/user-table' className={style.link}>
                            <span className="bi bi-card-list me-1"></span>
                            User Table
                        </Link>
                    </li>
                </ul>
                {/* Links right side */}
                <ul className="navbar-nav ms-auto">
                    <li className="nav-item me-3">
                        <Link to='/settings' className={style.link}>
                            <span className="bi bi-gear-fill me-1"></span>
                            Settings
                        </Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link to='/signup' className={style.link}>
                            <span className="bi bi-person-plus-fill me-1"></span>
                            Sign up
                        </Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link to='/login' className={style.link}>
                            <span className="bi bi-box-arrow-in-right me-1"></span>
                            Login
                        </Link>
                    </li>
                    <li className="nav-item me-3">
                        <Link to='/login' className={style.link}>
                            <span className="bi bi-box-arrow-right me-1"></span>
                            Logout
                        </Link>
                    </li>
                </ul>
            </nav>

            <main>
                {props.children}
            </main>

        </div>
    );

}

export default MainLayout;