import { NavLink, Outlet, useLocation } from 'react-router-dom';

import { authLayoutBg } from '../../../widgets/AuthLayout/model/constants';

import stl from './index.module.scss';

const AuthLayout = () => {
    const location = useLocation();

    const getLayoutBg = () => {
        return authLayoutBg[location.pathname];
    };

    console.log(getLayoutBg());

    return (
        <div
            className={stl.auth}
            style={{
                background: `url(${authLayoutBg[location.pathname]}) center / cover no-repeat`,
            }}
        >
            <div className={stl.overlay} />
            <div className={stl.auth__content}>
                <div />
                <div className={stl.auth__page}>
                    <Outlet />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;
