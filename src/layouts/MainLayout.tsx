import { Link, Outlet, useNavigate } from 'react-router-dom';
import { fakeAuthProvider } from '../pages/auth/auth';

const MainLayout = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await fakeAuthProvider.signout();
        navigate('/login');
    };

    return (
        <div>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            {fakeAuthProvider.username && (
                <nav>
                    <ul>
                        <li>
                            <Link to="/">Home</Link>
                        </li>
                        <li>
                            <Link to="/about">About</Link>
                        </li>
                        <li>
                            <Link to="/dashboard">Dashboard</Link>
                        </li>
                        <li>
                            <Link to="/nothing-here">Nothing Here</Link>
                        </li>
                    </ul>
                </nav>
            )}

            {fakeAuthProvider.username && (
                <button type="button" onClick={logout}>
                    Logout
                </button>
            )}

            {/* <AuthStatus /> */}

            {/* An <Outlet> renders whatever child route is currently active,
          so you can think about this <Outlet> as a placeholder for
          the child routes we defined above. */}
            <Outlet />
        </div>
    );
};

export default MainLayout;
