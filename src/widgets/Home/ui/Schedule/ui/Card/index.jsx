import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import { mdiPlay, mdiPlaylistPlus } from '@mdi/js';
import Icon from '@mdi/react';

import { BASE_ASSETS_PATH } from '../../../../../../shared/constants/ApiPath';

import stl from './index.module.scss';

const ReleaseSchedule = ({ item }) => {
    const [isHovered, setIsHovered] = useState(false);
    const imagePath = `${BASE_ASSETS_PATH}${item?.poster?.src}`;

    return (
        <div
            className={stl.card}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {isHovered ? (
                <div className={stl.overlay} style={{ backgroundImage: `url(${imagePath})` }}>
                    <div className={stl.content}>
                        <h5 className={stl.episodes}>{item?.episodes_total} эпизодов</h5>
                        <h4 className={stl.title}>{item?.name?.main}</h4>
                        <p className={stl.meta}>
                            {item?.year} • {item?.season?.description} • {item?.type?.description} •{' '}
                            {item?.age_rating?.label}
                        </p>
                        <p className={stl.genres}>{item?.genres?.map((g) => g.name).join(' • ')}</p>
                        <div className={stl.actions}>
                            <NavLink className={stl.watchBtn} to={`/anime/${item.alias}`}>
                                <Icon path={mdiPlay} size={0.9} />
                                Смотреть
                            </NavLink>
                            <button className={stl.addBtn}>
                                <Icon path={mdiPlaylistPlus} size={1} />
                            </button>
                        </div>
                    </div>
                </div>
            ) : (
                <img className={stl.image} src={imagePath} alt={item?.name?.main} />
            )}
        </div>
    );
};

export default ReleaseSchedule;
