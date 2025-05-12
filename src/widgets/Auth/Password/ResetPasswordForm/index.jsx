import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiAlphaABox, mdiEyeOffOutline, mdiEyeOutline, mdiKey, mdiKeyOutline } from '@mdi/js';
import Icon from '@mdi/react';

import RoutePath from '../../../../shared/constants/RoutePath';
import { Cookies } from '../../Cookies';

import stl from './index.module.scss';

import { MainLogoWhite } from '@/app/assets/icons';

const ResetPasswordForm = () => {
    const [token, setToken] = useState('');
    const [pwd, setPwd] = useState('');
    const [confirmPwd, setConfirmPwd] = useState('');
    const [showPwd, setShowPwd] = useState(false);
    const [showConfirm, setShowConfirm] = useState(false);

    const toggle = (field) => {
        if (field === 'pwd') setShowPwd((v) => !v);
        else setShowConfirm((v) => !v);
    };


    return (
        <form className={stl.form} >
            <NavLink to={RoutePath.AUTH.RESET_PASSWORD()}>
                <img src={MainLogoWhite} alt='Logo' className={stl.logo} />
            </NavLink>

            <h2 className={stl.title}>Новый пароль</h2>
            <p className={stl.subtitle}>
                Вы можете создать новый пароль для Вашей учетной записи
                <br />
                Проверьте Вашу почту и найдите письмо с токеном восстановления пароля
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

                <div className={stl.withIcon}>
                    <input
                        type={showPwd ? 'text' : 'password'}
                        placeholder='Новый пароль'
                        required={true}
                        value={pwd}
                        onChange={(e) => setPwd(e.target.value)}
                    />
                    <Icon path={mdiKey} size={1} className={stl.leftIcon} />
                    <button type='button' onClick={() => toggle('pwd')} className={stl.toggleBtn}>
                        <Icon path={showPwd ? mdiEyeOffOutline : mdiEyeOutline} size={1} />
                    </button>
                </div>

                <div className={stl.withIcon}>
                    <input
                        type={showConfirm ? 'text' : 'password'}
                        placeholder='Подтверждение пароля'
                        required={true}
                        value={confirmPwd}
                        onChange={(e) => setConfirmPwd(e.target.value)}
                    />
                    <Icon path={mdiKeyOutline} size={1} className={stl.leftIcon} />
                    <button
                        type='button'
                        onClick={() => toggle('confirm')}
                        className={stl.toggleBtn}
                    >
                        <Icon path={showConfirm ? mdiEyeOffOutline : mdiEyeOutline} size={1} />
                    </button>
                </div>
            </div>

            <button
                type='submit'
                className={stl.submit}
                disabled={!`${(token, pwd, confirmPwd)}`.trim()}
            >
                Сохранить новый пароль
            </button>

            <div className={stl.links}>
                <NavLink to={RoutePath.AUTH.LOGIN()}>Авторизация</NavLink>
                <NavLink to={RoutePath.AUTH.FORGOT_PASSWORD()}>
                    Повторно выслать письмо с токеном
                </NavLink>
            </div>

            <Cookies />
        </form>
    );
};

export default ResetPasswordForm;
