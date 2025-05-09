// src/pages/AnilibriaNow/index.jsx
import { useEffect, useState } from 'react';
import axios from 'axios';

import ReleaseSchedule from './ui/Card';

import stl from './index.module.scss'; // например, сетка карточек

const Schedule = () => {
    const [releases, setReleases] = useState([]);

    useEffect(() => {
        const fetchNowReleases = async () => {
            try {
                const response = await axios.get('https://anilibria.top/api/v1/anime/schedule/now');
                const todayData = response.data.today;

                // Вытаскиваем только release объекты
                const extractedReleases = todayData.map((item) => item.release);

                setReleases(extractedReleases);
            } catch (error) {
                console.error('Ошибка при загрузке данных:', error);
            }
        };

        fetchNowReleases();
    }, []);

    return (
        <div className={stl.grid}>
            {releases.map((release) => (
                <ReleaseSchedule key={release.id} item={release} />
            ))}
        </div>
    );
};

export default Schedule;
