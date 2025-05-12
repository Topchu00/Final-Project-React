import EmailVerification from '../../../../pages/Auth/EmailVerify';
import Login from '../../../../pages/Auth/Login';
import { ForgotPassword } from '../../../../pages/Auth/Password/ForgetPassword';
import { ResetPassword } from '../../../../pages/Auth/Password/ResetPassword';
import Registration from '../../../../pages/Auth/Registration';
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
                element: <Registration />,
            },
            {
                index: true,
                path: RoutePath.AUTH.FORGOT_PASSWORD(),
                element: <ForgotPassword />,
            },
            {
                index: true,
                path: RoutePath.AUTH.RESET_PASSWORD(),
                element: <ResetPassword />,
            },
            {
                index: true,
                path: RoutePath.AUTH.EMAIL_VERIFICATION(),
                element: <EmailVerification />,
            },
        ],
    },
];
