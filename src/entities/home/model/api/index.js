import axios from 'axios';

import ApiPath from '../../../../shared/constants/ApiPath';

const HomeApi = () => {
    const fetchLatestReleases = async () => {
        try {
            const { data } = await axios.get(`${ApiPath.latestReleases}?limit=4`);

            return data;
        } catch (error) {
            console.error('Error fetching latest releases:', error);
        }
    };

    return {
        fetchLatestReleases,
    };
};

export default HomeApi;
