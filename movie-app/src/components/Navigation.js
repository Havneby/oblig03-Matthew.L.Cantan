import { NavLink } from 'react-router-dom';

const Navigation = () => (
    <nav>
        <ul>
            <li>
                <NavLink to="/">Home</NavLink>
            </li>
            <li>
                <NavLink to="/movies">Movies</NavLink>
            </li>
        </ul>
    </nav>
);

export default Navigation;