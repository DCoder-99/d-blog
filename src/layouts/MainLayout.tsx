import { Box } from '@chakra-ui/react';
import { Outlet, useNavigate } from 'react-router-dom';
import Navbar from '../components/Navbar';
import { fakeAuthProvider } from '../pages/auth/auth';

const MainLayout = () => {
    const navigate = useNavigate();

    const logout = async () => {
        await fakeAuthProvider.signout();
        navigate('/login');
    };

    return (
        <Box>
            {/* A "layout route" is a good place to put markup you want to
          share across all the pages on your site, like navigation. */}
            <Navbar />
            {fakeAuthProvider.username && (
                <button type="button" onClick={logout}>
                    Logout
                </button>
            )}
            <Outlet />
        </Box>
    );
};

export default MainLayout;
