import {
    HomeBanner,
    HomeFranchises,
    HomeGenres,
    HomeReleases,
    HomeSchedule,
    HomeSupport,
    HomeTorrents,
    HomeVideos,
} from '../../widgets/Home';

const Home = () => {
    return (
        <div className='container'>
            <div className='page'>
                <HomeBanner />
                <HomeReleases />
                <HomeSupport />
                <HomeSchedule />
                <HomeVideos />
                <HomeFranchises />
                <HomeGenres />
                <HomeTorrents />
            </div>
        </div>
    );
};

export default Home;
