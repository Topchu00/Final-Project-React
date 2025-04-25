import { createBrowserRouter } from 'react-router-dom';

import Home from '../../pages/Home';
import DefaultLayout from '../layouts/DefaultLayout';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                path: '',
                element: <Home />,
            },
        ],
    },
]);

export default router;
