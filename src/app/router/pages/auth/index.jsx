import Login from '../../../../pages/Auth/Login';
import RoutePath from '../../../../shared/constants/RoutePath';
import AuthLayout from '../../../layouts/AuthLayout';

export default [
    {
        path: RoutePath.AUTH.PREFIX,
        element: <AuthLayout />,
        children: [
            {
                index: true,
                path: RoutePath.AUTH.LOGIN(),
                element: <Login />,
            },
            {
                index: true,
                path: RoutePath.AUTH.REGISTRATION(),
                element: <Login />,
            },
        ],
    },
];
