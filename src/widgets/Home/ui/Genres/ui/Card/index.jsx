import { NavLink } from 'react-router-dom';

import { BASE_ASSETS_PATH } from '../../../../../../shared/constants/ApiPath';
import RoutePath from '../../../../../../shared/constants/RoutePath';

import stl from './index.module.scss';

const GenresCard = ({ item }) => {
    const getEpisodeText = (number) => {
        const n = number % 100;
        const last = number % 10;

        if (n >= 11 && n <= 14) return `${number} эпизодов`;
        if (last === 1) return `${number} эпизод`;
        if (last >= 2 && last <= 4) return `${number} эпизода`;

        return `${number} эпизодов`;
    };

    const imagePath = `${BASE_ASSETS_PATH}${item?.image?.preview}`;

    return (
        <NavLink to={RoutePath.CATALOG} className={stl.card}>
            <img src={imagePath} alt={item.name} />
            <div className={stl.card__overlay}>
                <h3 className={stl.card__title}>{item.name}</h3>
                <p className={stl.card__subtitle}>{getEpisodeText(item.total_releases)}</p>
            </div>
        </NavLink>
    );
};

export default GenresCard;
