import { useEffect, useState } from 'react';

import HomeApi from '../../../../entities/home/model/api';
import RoutePath from '../../../../shared/constants/RoutePath';
import SectionTitle from '../../../../shared/ui/SectionTitle';

import VideosCard from './ui/Card';

import stl from './index.module.scss';

export const Videos = () => {
    const { fetchLatestVideos } = HomeApi();
    const [videos, setVideos] = useState([]);

    const getLatestVideos = async () => {
        const data = await fetchLatestVideos();

        setVideos(data);
    };

    useEffect(() => {
        getLatestVideos();
    }, []);

    return (
        <div className={stl.videos}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Последние видео'
                subtitle='Самые интересные видео ролики от любимой команды'
            />
            <div className={stl.videos__wrapper}>
                {videos.map((item, idx) => (
                    <VideosCard key={idx} item={item} />
                ))}
            </div>
        </div>
    );
};
