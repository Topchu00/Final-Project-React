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
            const { data } = await axios.get(`${ApiPath.latestSchedule}?limit=4`);

            return data;
        } catch (error) {
            console.error('Error fetching latest schedule:', error);
        }
    };

    return {
        fetchLatestReleases,
        fetchLatestSchedule,
    };
};

export default HomeApi;
