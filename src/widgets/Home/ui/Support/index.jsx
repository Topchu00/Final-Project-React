import { NavLink } from 'react-router-dom';
import { mdiCurrencyRub } from '@mdi/js';
import Icon from '@mdi/react';

import stl from './index.module.scss';

export const Support = () => {
    return (
        <div className={stl.wrapper}>
            <div className={stl.support}>
                <div className={stl.support__image}>
                    <img src='https://anilibria.wtf/_nuxt/libria.ob8Dfg8u.png' alt='' />
                </div>
                <div className={stl.support__content}>
                    <h3>Поддержите АниЛибрию!</h3>
                    <div>
                        <p>Поддержите команду проекта</p>
                        <p>
                            Получите доступ в закрытый чат в Telegram, а также специальный статус на
                            нашем Discord сервере
                        </p>
                    </div>
                    <NavLink to={'#'}>
                        <Icon path={mdiCurrencyRub} size='18px' color='#ffffff' />
                        Поддержать
                    </NavLink>
                </div>
            </div>
            <div className={stl.payment}>
                <img
                    src='https://anilibria.wtf/storage/ads/banners/images/9ebd01b9-df28-49ad-af82-95c7167307e4/cW6w4Tl6tHPGcJCVG7ut6cYdjgk1BAxY.webp'
                    alt='payment image'
                />
            </div>
        </div>
    );
};
