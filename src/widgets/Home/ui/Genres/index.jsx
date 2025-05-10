import { useEffect, useState } from 'react';

import HomeApi from '../../../../entities/home/model/api';
import RoutePath from '../../../../shared/constants/RoutePath';
import SectionTitle from '../../../../shared/ui/SectionTitle';

import GenresCard from './ui/Card';

import stl from './index.module.scss';

export const Genres = () => {
    const { fetchGenres } = HomeApi();
    const [genres, setGenres] = useState([]);

    const getGenres = async () => {
        const data = await fetchGenres();

        setGenres(data);
    };

    useEffect(() => {
        getGenres();
    }, []);

    return (
        <div className={stl.genres}>
            <SectionTitle
                to={RoutePath.CATALOG}
                title='Жанры'
                subtitle='Список жанров на любой вкус и цвет'
            />
            <div className={stl.genres__wrapper}>
                {genres.map((item, idx) => (
                    <GenresCard key={idx} item={item} />
                ))}
            </div>
        </div>
    );
};
