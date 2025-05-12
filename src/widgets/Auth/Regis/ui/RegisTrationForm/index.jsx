import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import {
    mdiAccount,
    mdiComment,
    mdiEmailOutline,
    mdiEyeOffOutline,
    mdiEyeOutline,
    mdiKey,
    mdiKeyOutline,
} from '@mdi/js';
import Icon from '@mdi/react';

import RoutePath from '../../../../../shared/constants/RoutePath';
import { AUTH_ICONS } from '../../../../AuthLayout/model/constants/constants';
import { Cookies } from '../../../Cookies';

import stl from './index.module.scss';

import { MainLogoWhite } from '@/app/assets/icons';

const RegistrationForm = () => {
    const [login, setLogin] = useState('');
    const [nickname, setNickname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [showPwd, setShowPwd] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const toggle = (field) => {
        if (field === 'pwd') setShowPwd(!showPwd);
        else setShowConfirm(!showConfirm);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        // регистрация
    };

    return (
        <form className={stl.form} onSubmit={handleSubmit}>
            <NavLink to={RoutePath.HOME}>
                <img src={MainLogoWhite} alt='Logo' className={stl.logo} />
            </NavLink>
            <h2 className={stl.title}>Регистрация</h2>
            <p className={stl.subtitle}>
                Введите Ваши данные, чтобы создать свою учётную запись
                <br />
                Также можно зарегистрироваться через социальные сети
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
                        type='text'
                        placeholder='Никнейм'
                        required={true}
                        value={nickname}
                        onChange={(e) => setNickname(e.target.value)}
                    />
                    <Icon path={mdiComment} size={1} className={stl.leftIcon} />
                </div>

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

                <div className={stl.withIcon}>
                    <input
                        type={showPwd ? 'text' : 'password'}
                        placeholder='Пароль'
                        required={true}
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                    <Icon path={mdiKey} size={1} className={stl.leftIcon} />

                    <button type='button' onClick={() => toggle('pwd')}>
                        <Icon path={showPwd ? mdiEyeOffOutline : mdiEyeOutline} size={1} />
                    </button>
                </div>

                <div className={stl.withIcon}>
                    <input
                        type={showConfirm ? 'text' : 'password'}
                        placeholder='Подтверждение пароля'
                        required={true}
                        value={confirmPassword}
                        onChange={(e) => setConfirmPassword(e.target.value)}
                    />
                    <Icon path={mdiKeyOutline} size={1} className={stl.leftIcon} />
                    <button type='button' onClick={() => toggle('confirm')}>
                        <Icon path={showConfirm ? mdiEyeOffOutline : mdiEyeOutline} size={1} />
                    </button>
                </div>
            </div>

            <button
                type='submit'
                className={stl.submit}
                disabled={!`${(login, nickname, email, password, confirmPassword)}`.trim()}
            >
                Зарегистрироваться
            </button>

            <div className={stl.links}>
                <NavLink to={RoutePath.AUTH.EMAIL_VERIFICATION()}>
                    У меня уже есть токен верификации
                </NavLink>
                <NavLink to={RoutePath.AUTH.FORGOT_PASSWORD()}>Восстановить пароль</NavLink>
                <NavLink to={RoutePath.AUTH.LOGIN()}>Авторизоваться</NavLink>
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

export default RegistrationForm;
