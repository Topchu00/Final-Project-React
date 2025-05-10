import { useEffect, useState } from 'react';

import HomeApi from '../../../../entities/home/model/api';
import RoutePath from '../../../../shared/constants/RoutePath';
import SectionTitle from '../../../../shared/ui/SectionTitle';

import FranchiseCard from './ui/Card';

import stl from './index.module.scss';

export const Franchises = () => {
    const { fetchLatestFranchises } = HomeApi();
    const [franchises, setFranchises] = useState([]);

    const getLatestFranchises = async () => {
        const data = await fetchLatestFranchises();

        setFranchises(data);
    };

    useEffect(() => {
        getLatestFranchises();
    }, []);

    return (
        <div className={stl.franchises}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Франшизы'
                subtitle='Самые интересные и захватывающие франшизы в любимой озвучке'
            />
            <div className={stl.franchises__wrapper}>
                {franchises.map((item, idx) => (
                    <FranchiseCard key={idx} item={item} />
                ))}
            </div>
        </div>
    );
};
