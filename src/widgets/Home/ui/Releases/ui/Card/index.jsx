import { useState } from 'react';

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
                ></div>
            ) : (
                <img src={`${BASE_ASSETS_PATH}${item?.poster?.src}`} alt='' />
            )}
        </div>
    );
};

export default ReleaseCard;
