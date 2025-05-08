import { NavLink } from 'react-router-dom';

import RoutePath from '../../../shared/constants/RoutePath';
import { LoginForm } from '../../../widgets/Auth/Login/ui/LoginForm';

import stl from './index.module.scss';

import { MainLogoWhite } from '@/app/assets/icons';

const Login = () => {
    return (
        <div className='container'>
            <div className={`${stl.wrapper} page`}>
                <div className={stl.text_content}>
                    <NavLink to={RoutePath.HOME}>
                        <img width='70' height='70' src={MainLogoWhite} alt='Logo' />
                    </NavLink>
                    <h2 className={stl.title}>Авторизация</h2>
                    <p className={stl.subtitle}>Введите имя пользователя и пароль, чтобы войти в свою учетную запись</p>
                    <p className={stl.subtitle}>Также, можно авторизоваться через социальные сети</p>
                </div>
                <LoginForm />
            </div>
        </div>
    );
};

export default Login;
