import { useNavigate } from 'react-router-dom';

import { BASE_ASSETS_PATH } from '../../../../../../shared/constants/ApiPath';
import RoutePath from '../../../../../../shared/constants/RoutePath';

import stl from './index.module.scss';

const ScheduleCard = ({ episode }) => {
    const navigate = useNavigate();
    const imagePath = `${BASE_ASSETS_PATH}${episode.release.poster.src}`;

    const handleClick = () => navigate(RoutePath.CATALOG);

    return (
        <div className={stl.card} onClick={handleClick}>
            <div
                className={stl.card__inner}
                style={{
                    '--poster-url': `url("${imagePath}")`,
                }}
            >
                <h3 className={stl.card__title}>{episode?.release?.name?.main}</h3>
                <p className={stl.card__episode}>
                    Эпизод {episode?.published_release_episode?.ordinal}
                </p>
                <div className={stl.card__meta}>
                    <span>
                        {episode.release.year} • {episode.release.season.description} •{' '}
                        {episode.release.type.description} • {episode.release.age_rating.label}
                    </span>
                    <span>{episode.release.genres.map((g) => g.name).join(' • ')}</span>
                </div>
            </div>
        </div>
    );
};

export default ScheduleCard;
