import { useEffect, useState } from 'react';
import { mdiRss } from '@mdi/js';
import Icon from '@mdi/react';

import HomeApi from '../../../../entities/home/model/api';
import RoutePath from '../../../../shared/constants/RoutePath';
import SectionTitle from '../../../../shared/ui/SectionTitle';

import TorrentsTable from './ui/Table';

import stl from './index.module.scss';

export const Torrents = () => {
    const { fetchTorrents } = HomeApi();
    const [torrents, setTorrents] = useState();

    useEffect(() => {
        fetchTorrents()
            .then((data) => {
                const list = data?.data ?? data?.items ?? data ?? [];

                setTorrents(Array.isArray(list) ? list : []);
            })
            .catch(() => setTorrents([]));
    }, []);

    if (!torrents) return <p className={stl.torrents__status}>Загрузка...</p>;

    return (
        <div className={stl.torrents}>
            <div className={stl.torrents__header}>
                <SectionTitle
                    to={RoutePath.CATALOG}
                    title='Торренты'
                    subtitle='Свежие торренты: озвучка + качество'
                />
                <div className={stl.torrents__icon}>
                    <button>
                        <Icon path={mdiRss} size='18px' />
                        RSS
                    </button>
                </div>
            </div>
            <div className={stl.torrents__wrapper}>
                {torrents.length > 0 ? (
                    torrents.map((item) => <TorrentsTable key={item.id || item.name} item={item} />)
                ) : (
                    <p className={stl.torrents__status}>Нет торрентов</p>
                )}
            </div>
        </div>
    );
};
