import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiPlay, mdiPlaylistPlus } from '@mdi/js';
import Icon from '@mdi/react';

import { BASE_ASSETS_PATH } from '../../../../../../shared/constants/ApiPath';

import stl from './index.module.scss';

const ReleaseCard = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imagePath = `${BASE_ASSETS_PATH}${item?.poster?.src}`;

    const handleMouseChange = (value) => {
        setIsHovered(value);
    };

    return (
        <div
            className={stl.card}
            onMouseEnter={() => handleMouseChange(true)}
            onMouseLeave={() => handleMouseChange(false)}
        >
            {isHovered ? (
                <div
                    className={stl.card__wrapper}
                    style={{
                        background: `url(${imagePath}) center / cover no-repeat`,
                    }}
                >
                    <div className={stl.card__content}>
                        <div className={stl.card__head}>
                            <h5>{item?.episodes_total} эпизод</h5>
                        </div>
                        <div className={stl.card__body}>
                            <h4>{item?.name?.main}</h4>
                            <div className={stl.card__info}>
                                <p>
                                    {item?.year} • {item?.season?.description} •{' '}
                                    {item?.type?.description} • {item?.age_rating.label}
                                </p>
                                <p>{item?.genres.map((g) => g.name).join(' • ')}</p>
                            </div>
                        </div>
                        <div className={stl.card__footer}>
                            <div></div>
                            <div className={stl.card__footer__actions}>
                                <NavLink className={stl.card__footer__actions__link} to={'#'}>
                                    <Icon path={mdiPlay} size={0.75} />
                                    Смотреть
                                </NavLink>
                                <button>
                                    <Icon path={mdiPlaylistPlus} size={1} color='#ffffff' />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            ) : (
                <img src={`${BASE_ASSETS_PATH}${item?.poster?.src}`} alt='' />
            )}
        </div>
    );
};

export default ReleaseCard;
