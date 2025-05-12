import { NavLink } from 'react-router-dom';

import { FOOTER_OPTIONS_ITEMS } from '../../model/constants';

import stl from './index.module.scss';

const FooterOptions = () => (
    <div className={stl.block}>
        <h3 className={stl.title}>ПОЛЬЗОВАТЕЛЬ</h3>
        <ul className={stl.list}>
            {FOOTER_OPTIONS_ITEMS.map((opt, i) => (
                <li key={i}>
                    <NavLink to={opt.to} className={stl.link}>
                        {opt.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterOptions;
