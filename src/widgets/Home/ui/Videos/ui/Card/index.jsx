import { mdiCommentOutline, mdiEyeOutline, mdiOpenInNew, mdiPlay } from '@mdi/js';
import Icon from '@mdi/react';

import { BASE_ASSETS_PATH } from '../../../../../../shared/constants/ApiPath';

import stl from './index.module.scss';

const VideosCard = ({ item }) => {
    const imagePath = `${BASE_ASSETS_PATH}${item?.image?.preview}`;
    const handleClick = () => {
        window.open(item.url, '_blank', 'noopener');
    };
    const handleKeyDown = (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            handleClick();
        }
    };

    return (
        <div
            className={stl.card}
            role='link'
            tabIndex={0}
            onClick={handleClick}
            onKeyDown={handleKeyDown}
        >
            <div className={stl.card__imageWrapper}>
                <img src={imagePath} alt={item.title} className={stl.card__image} />
            </div>
            <div className={stl.card__content}>
                <div className={stl.card__info}>
                    <h3 className={stl.card__title}>{item.title}</h3>
                    <p className={stl.card__subtitle}>{item.origin.title}</p>
                    <div className={stl.card__meta}>
                        <span>
                            <Icon path={mdiCommentOutline} size={0.7} />
                            {item.comments}
                        </span>
                        •
                        <span>
                            <Icon path={mdiEyeOutline} size={0.7} />
                            {item.views}
                        </span>
                    </div>
                </div>
                <div className={stl.card__footer}>
                    <button
                        type='button'
                        className={stl.card__btnPlay}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    >
                        <Icon path={mdiPlay} size={0.8} />
                        Смотреть
                    </button>
                    <button
                        type='button'
                        className={stl.card__btnOpen}
                        onClick={(e) => {
                            e.stopPropagation();
                            handleClick();
                        }}
                    >
                        <Icon path={mdiOpenInNew} size={1} />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default VideosCard;
