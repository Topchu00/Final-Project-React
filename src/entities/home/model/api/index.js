import axios from 'axios';

import ApiPath from '../../../../shared/constants/ApiPath';

const HomeApi = () => {
    const fetchLatestReleases = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.latestReleases}?limit=6`);

            return data;
        } catch (error) {
            console.error('Error fetching latest releases:', error);
        }
    };

    const fetchLatestSchedule = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.latestSchedule}`);

            return data;
        } catch (error) {
            console.error('Error fetching latest schedule:', error);
        }
    };

    const fetchLatestVideos = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.latestVideos}?limit=4`);

            return data;
        } catch (error) {
            console.error('Error fetching latest videos:', error);
        }
    };

    const fetchLatestFranchises = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.latestFranchises}/random?limit=3`);

            return data;
        } catch (error) {
            console.error('Error fetching latest franchises:', error);
        }
    };

    const fetchGenres = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.Genres}/random?limit=6`);

            return data;
        } catch (error) {
            console.error('Error fetching genres:', error);
        }
    };

    const fetchTorrents = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.Torrents}?page=1&limit=5`);

            return data;
        } catch (error) {
            console.error('Error fetching torrents:', error);
        }
    };

    return {
        fetchLatestReleases,
        fetchLatestSchedule,
        fetchLatestVideos,
        fetchLatestFranchises,
        fetchGenres,
        fetchTorrents,
    };
};

export default HomeApi;
