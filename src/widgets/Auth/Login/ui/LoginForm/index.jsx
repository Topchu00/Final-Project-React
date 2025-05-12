import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiAccount, mdiEyeOffOutline, mdiEyeOutline, mdiKeyVariant } from '@mdi/js';
import Icon from '@mdi/react';

import RoutePath from '../../../../../shared/constants/RoutePath';
import { AUTH_ICONS } from '../../../../AuthLayout/model/constants/constants';
import { Cookies } from '../../../Cookies';

import stl from './index.module.scss';

import { MainLogoWhite } from '@/app/assets/icons';

const LoginForm = () => {
    const [login, setLogin] = useState('');
    const [password, setPassword] = useState('');
    const [showPwd, setShowPwd] = useState(false);

    const togglePwd = () => setShowPwd((prev) => !prev);

    return (
        <form className={stl.form} >
            <NavLink to={RoutePath.HOME}>
                <img src={MainLogoWhite} alt='Logo' className={stl.logo} />
            </NavLink>
            <h2 className={stl.title}>Авторизация</h2>
            <p className={stl.subtitle}>
                Введите имя пользователя и пароль, чтобы войти в свою учетную запись
                <br />
                Также, можно авторизоваться через социальные сети
            </p>

            <div className={stl.fields}>
                <div className={stl.withIcon}>
                    <input
                        type='text'
                        placeholder='Логин'
                        required={true}
                        value={login}
                        onChange={(e) => setLogin(e.target.value)}
                    />
                    <Icon path={mdiAccount} size={1} className={stl.leftIcon} />
                </div>

                <div className={stl.withIcon}>
                    <input
                        type={showPwd ? 'text' : 'password'}
                        placeholder='Пароль'
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Icon path={mdiKeyVariant} size={1} className={stl.leftIcon} />
                    <button type='button' onClick={togglePwd}>
                        <Icon path={showPwd ? mdiEyeOffOutline : mdiEyeOutline} size={1} />
                    </button>
                </div>
            </div>

            <button type='submit' className={stl.submit} disabled={!`${login, password}`.trim()}>
                Авторизация
            </button>

            <div className={stl.links}>
                <NavLink to={RoutePath.AUTH.REGISTRATION()}>Регистрация</NavLink>
                <NavLink to={RoutePath.AUTH.FORGOT_PASSWORD()}>Восстановить пароль</NavLink>
            </div>

            <div className={stl.orLine}>
                <span>или</span>
            </div>

            <div className={stl.social}>
                {AUTH_ICONS.map((s, i) => (
                    <a key={i} href={s.url} target='_blank' rel='noopener' aria-label={s.title}>
                        {s.icon}
                    </a>
                ))}
            </div>

            <Cookies />
        </form>
    );
};

export default LoginForm;
