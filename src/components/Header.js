import { useDispatch, useSelector } from "react-redux";

import classes from './Header.module.css';
import { authActions}  from "../store";

const Header = () => {
    const isAuth = useSelector((state) => state.auth.isAuth);
    const dispatch = useDispatch();

    const logoutHandler = (e) => {
        dispatch(authActions.logout());
    }

    return (
        <header className={classes.header}>
            <h1>Redux Auth</h1>
            <nav>
                {isAuth && (
                    <ul>
                        <li>
                            <a href='/'>My Products</a>
                        </li>
                        <li>
                            <a href='/'>My Sales</a>
                        </li>
                         <li>
                            <button onClick={logoutHandler}>Logout</button>
                        </li>
                    </ul>
                )}
            </nav>
        </header>
    );
};

export default Header;
