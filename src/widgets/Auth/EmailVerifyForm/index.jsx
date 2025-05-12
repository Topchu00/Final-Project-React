import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiAlphaABox } from '@mdi/js';
import Icon from '@mdi/react';

import RoutePath from '../../../shared/constants/RoutePath';
import { Cookies } from '../Cookies';

import stl from './index.module.scss';

import { MainLogoWhite } from '@/app/assets/icons';

const EmailVerificationForm = () => {
    const [token, setToken] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // отправка token для подтверждения почты
    };

    return (
        <form className={stl.form} onSubmit={handleSubmit}>
            <NavLink to={RoutePath.AUTH.EMAIL_VERIFICATION()}>
                <img src={MainLogoWhite} alt='Logo' className={stl.logo} />
            </NavLink>

            <h2 className={stl.title}>Подтверждение почты</h2>
            <p className={stl.subtitle}>
                Проверьте Вашу почту и найдите письмо с токеном подтверждения почты
                <br />
                Вы сможете авторизоваться только после подтверждения почты
            </p>

            <div className={stl.fields}>
                <div className={stl.withIcon}>
                    <input
                        type='text'
                        placeholder='Токен из письма'
                        required={true}
                        value={token}
                        onChange={(e) => setToken(e.target.value)}
                    />
                    <Icon path={mdiAlphaABox} size={1} className={stl.leftIcon} />
                </div>
            </div>

            <button type='submit' className={stl.submit} disabled={!token.trim()}>
                Подтвердить
            </button>

            <Cookies />
        </form>
    );
};

export default EmailVerificationForm;
