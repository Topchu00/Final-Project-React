import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiEmailOutline } from '@mdi/js';
import Icon from '@mdi/react';

import RoutePath from '../../../../shared/constants/RoutePath';
import { Cookies } from '../../Cookies';

import stl from './index.module.scss';

import { MainLogoWhite } from '@/app/assets/icons';

export const ForgotPasswordForm = () => {
    const [email, setEmail] = useState('');



    return (
        <form className={stl.form} >
            <NavLink to={RoutePath.HOME}>
                <img src={MainLogoWhite} alt='Logo' className={stl.logo} />
            </NavLink>
            <h2 className={stl.title}>Восстановление пароля</h2>
            <p className={stl.subtitle}>
                Вы можете восстановить забытый пароль и сгенерировать новый.
                <br />
                Введите Вашу почту, на которую вы зарегистрировали аккаунт, мы пришлём Вам письмо с
                дальнейшими инструкциями
            </p>

            <div className={stl.fields}>
                <div className={stl.withIcon}>
                    <input
                        type='email'
                        placeholder='Email'
                        required={true}
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <Icon path={mdiEmailOutline} size={1} className={stl.leftIcon} />
                </div>
            </div>

            <button type='submit' className={stl.submit} disabled={!email.trim()}>
                Восстановить пароль
            </button>

            <div className={stl.links}>
                <NavLink to={RoutePath.AUTH.RESET_PASSWORD()}>У меня уже есть токен</NavLink>
            </div>

            <Cookies />
        </form>
    );
};
