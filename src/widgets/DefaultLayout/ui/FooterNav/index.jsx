import { NavLink } from 'react-router-dom';

import { FOOTER_ITEMS } from '../../model/constants';

import stl from './index.module.scss';

const FooterNav = () => (
    <div className={stl.block}>
        <h3 className={stl.title}>НАВИГАЦИЯ</h3>
        <ul className={stl.list}>
            {FOOTER_ITEMS.map((item, i) => (
                <li key={i}>
                    <NavLink to={item.to} className={stl.link}>
                        {item.title}
                    </NavLink>
                </li>
            ))}
        </ul>
    </div>
);

export default FooterNav;
