import { NavLink } from 'react-router-dom';
import { mdiArrowRight } from '@mdi/js';
import Icon from '@mdi/react';

import stl from './index.module.scss';

const SectionTitle = ({ title, subtitle, to }) => {
    const linkedTitle = (
        <div className={stl['wrapper__link']}>
            <NavLink className={stl['section-title']} to={to}>
                {title}
            </NavLink>
            <Icon path={mdiArrowRight} size="20px" color="#ffffff" />
        </div>
    );

    const titleJSX = to ? linkedTitle : <h3 className={stl['section-title']}>{title}</h3>;

    return (
        <div className={stl.wrapper}>
            {titleJSX}
            <p className={stl['section-subtitle']}>{subtitle}</p>
        </div>
    );
};

export default SectionTitle;
