import { NavLink } from 'react-router-dom';

import { FOOTER_ITEMS } from '../../DefaultLayout/model/constants';

import stl from './index.module.scss';

export const Cookies = () => {
    return (
        <div className={stl.cookies}>
            <p>Мы используем файлы cookies для более комфортной работы пользователя.</p>
            <p>Продолжая просмотр, Вы соглашаетесь с использованием файлов cookies</p>

            <div className={stl.cookies__links}>
                {FOOTER_ITEMS.map((item, index) => (
                    <span key={item.title} className={stl.cookies__links__linkWrapper}>
                        <NavLink to={item.to}>{item.title}</NavLink>
                        {index !== FOOTER_ITEMS.length - 1 && <span className={stl.cookies__links__dot}>•</span>}
                    </span>
                ))}
                <span className={stl.cookies__links__years}>© 2012 — 2025 • AniLibria</span>
            </div>
        </div>
    );
};
