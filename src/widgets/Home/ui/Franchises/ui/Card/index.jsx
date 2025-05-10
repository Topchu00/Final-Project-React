import { NavLink } from 'react-router-dom';

import { BASE_ASSETS_PATH } from '../../../../../../shared/constants/ApiPath';

import stl from './index.module.scss';

const FranchiseCard = ({ item }) => {
    const imagePath = `${BASE_ASSETS_PATH}${item?.image?.preview}`;

    return (
        <NavLink className={stl.card}>
            <div className={stl.card__imageWrapper}>
                <img src={imagePath} alt={item.name} className={stl.card__image} />
            </div>
            <div className={stl.card__info}>
                <div className={stl.card__titles}>
                    <h3 className={stl.card__titles__title}>{item.name}</h3>
                    <p className={stl.card__titles__subtitle}>{item.name_english}</p>
                </div>
                <div className={stl.card__details}>
                    <p className={stl.card__details__years}>
                        {item.first_year} — {item.last_year}
                    </p>
                    <p className={stl.card__details__episodes}>
                        {item.total_releases} сезона • {item.total_episodes} эпизодов
                    </p>
                    <p className={stl.card__details__duration}>{item.total_duration}</p>
                </div>
            </div>
        </NavLink>
    );
};

export default FranchiseCard;
