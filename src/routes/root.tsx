import { LoaderFunctionArgs, Route, Routes, redirect } from 'react-router-dom';
import MainLayout from '../layouts/MainLayout';
import About from '../pages/about';
import Login, { loader as loginLoader } from '../pages/auth/Login';
import NoMatch from '../pages/auth/NoMatch';
import { fakeAuthProvider } from '../pages/auth/auth';
import Home from '../pages/home';

const Root = () => {
    return (
        <Routes>
            <Route
                path="/"
                element={<MainLayout />}
                loader={() => {
                    return { user: fakeAuthProvider.username };
                }}
            >
                <Route index element={<Home />} />
                <Route path="about/*" element={<About />} />
                <Route path="login" loader={loginLoader} element={<Login />} />
                <Route path="protected" loader={protectedLoader} element={<ProtectedPage />} />

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NoMatch />} />
            </Route>
            <Route
                path="/logout"
                action={async () => {
                    await fakeAuthProvider.signout();
                    return redirect('/');
                }}
            />
        </Routes>
    );
};

function protectedLoader({ request }: LoaderFunctionArgs) {
    // If the user is not logged in and tries to access `/protected`, we redirect
    // them to `/login` with a `from` parameter that allows login to redirect back
    // to this page upon successful authentication
    if (!fakeAuthProvider.isAuthenticated) {
        let params = new URLSearchParams();
        params.set('from', new URL(request.url).pathname);
        return redirect('/login?' + params.toString());
    }
    return null;
}

function ProtectedPage() {
    return <h3>Protected</h3>;
}

export default Root;
