import { createBrowserRouter } from 'react-router-dom';

import Home from '../../pages/Home';
import RoutePath from '../../shared/constants/RoutePath';
import DefaultLayout from '../layouts/DefaultLayout';

import { AuthPagesRoutes } from './pages';

const router = createBrowserRouter([
    {
        path: RoutePath.HOME,
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                path: '',
                element: <Home />,
            },
        ],
    },
    ...AuthPagesRoutes,
]);

export default router;
