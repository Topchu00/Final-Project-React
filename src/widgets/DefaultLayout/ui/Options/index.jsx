import { NavLink } from 'react-router-dom';

import { OPTIONS_ITEMS } from '../../model';

import stl from './index.module.scss';

const Options = () => {
    return (
        <ul className={stl.options}>
            {OPTIONS_ITEMS?.map(({ icon, to }, idx) => (
                <li key={idx}>
                    <NavLink to={to} className={stl.options__item}>
                        {icon}
                    </NavLink>
                </li>
            ))}
        </ul>
    );
};

export default Options;
