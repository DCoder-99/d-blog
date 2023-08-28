import { Route, Routes } from 'react-router-dom';
import About from '../pages/about';
import ListItem from '../pages/about/ListItem';
import CreateItem from '../pages/about/CreateItem';
import NoMatch from '../pages/auth/NoMatch';

const AboutRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<About />}>
                <Route index element={<ListItem />} />
                <Route path="/about/create" element={<CreateItem />} />

                {/* Using path="*"" means "match anything", so this route
                acts like a catch-all for URLs that we don't have explicit
                routes for. */}
                <Route path="*" element={<NoMatch />} />
            </Route>
        </Routes>
    );
};

export default AboutRoutes;
