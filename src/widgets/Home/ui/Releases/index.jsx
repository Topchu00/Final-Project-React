import { useState } from 'react';
import { useEffect } from 'react';

import HomeApi from '../../../../entities/home/model/api';
import RoutePath from '../../../../shared/constants/RoutePath';
import SectionTitle from '../../../../shared/ui/SectionTitle';

import ReleaseCard from './ui/Card';

import stl from './index.module.scss';

export const Releases = () => {
    const { fetchLatestReleases } = HomeApi();
    const [releases, setReleases] = useState([]);

    const getLatestReleases = async () => {
        const data = await fetchLatestReleases();

        setReleases(data);
    };

    useEffect(() => {
        getLatestReleases();
    }, []);

    return (
        <div className={stl.releases}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Новые эпизоды'
                subtitle='Самые новые и свежие эпизоды в любимой озвучке'
            />

            <div className={stl.releases__wrapper}>
                {releases.length > 0 &&
                    releases.map((item, idx) => <ReleaseCard key={idx} item={item} />)}
            </div>
        </div>
    );
};
