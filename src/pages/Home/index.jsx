import { HomeBanner, HomeReleases } from '../../widgets/Home';

const Home = () => {
    return (
        <div className='container'>
            <div className='page'>
                <HomeBanner />
                <HomeReleases />
            </div>
        </div>
    );
};

export default Home;
