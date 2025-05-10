import { useMemo, useState } from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import { mdiPlay, mdiPlaylistPlus } from '@mdi/js';
import Icon from '@mdi/react';

import { BASE_ASSETS_PATH } from '../../../../../../shared/constants/ApiPath';
import RoutePath from '../../../../../../shared/constants/RoutePath';

import stl from './index.module.scss';

const ScheduleCard = ({ episode }) => {
    const [isHovered, setIsHovered] = useState(false);
    const navigate = useNavigate();
    const imagePath = useMemo(
        () => `${BASE_ASSETS_PATH}${episode.release.poster.src}`,
        [episode.release.poster.src],
    );

    const handleClick = () => navigate(RoutePath.CATALOG);

    const handleMouseChange = (value) => {
        setIsHovered(value);
    };


    return (
        <div
            className={stl.card}
            onMouseEnter={() => handleMouseChange(true)}
            onMouseLeave={() => handleMouseChange(false)}
            onClick={handleClick}
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
                            <h3>Эпизод {episode?.published_release_episode?.ordinal}</h3>
                        </div>
                        <div className={stl.card__body}>
                            <h4>{episode?.release?.name?.main}</h4>
                            <div className={stl.card__info}>
                                <p>
                                    {episode?.release?.year} •{' '}
                                    {episode?.release?.season?.description} •{' '}
                                    {episode?.release?.type?.description} •{' '}
                                    {episode?.release?.age_rating.label}
                                </p>
                                <p>{episode?.release?.genres.map((g) => g.name).join(' • ')}</p>
                                <p>{episode?.published_release_episode?.duration}</p>
                            </div>
                        </div>
                        <div className={stl.card__footer}>
                            <div className={stl.card__footer__actions}>
                                <NavLink
                                    className={stl.card__footer__actions__link}
                                    to={RoutePath.CATALOG}
                                >
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
                <img src={`${imagePath}`} alt={episode.release.name.main} />
            )}
        </div>
    );
};

export default ScheduleCard;












