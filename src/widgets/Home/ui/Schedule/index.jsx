import { useEffect, useState } from 'react';

import HomeApi from '../../../../entities/home/model/api';
import RoutePath from '../../../../shared/constants/RoutePath';
import SectionTitle from '../../../../shared/ui/SectionTitle';

import ScheduleCard from './ui/Card';

import stl from './index.module.scss';

export const Schedule = () => {
    const { fetchLatestSchedule } = HomeApi();
    const [schedule, setSchedule] = useState([]);

    useEffect(() => {
        let mounted = true;

        (async () => {
            try {
                const raw = await fetchLatestSchedule();

                if (!mounted) return;
                setSchedule(Array.isArray(raw.today) ? raw.today : []);
            } catch (err) {
                console.error('Не удалось загрузить расписание', err);
            }
        })();

        return () => {
            mounted = false;
        };
    }, []);

    return (
        <div className={stl.schedule}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Расписание релизов'
                subtitle='Список релизов, над которыми команда трудится прямо сейчас'
            />
            <div className={stl.schedule__wrapper}>
                {schedule.map((item) => (
                    <ScheduleCard key={item.release.id} episode={item} />
                ))}
            </div>
        </div>
    );
};
