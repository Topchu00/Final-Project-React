import { HomeBanner, HomeReleases, HomeSupport } from '../../widgets/Home';

const Home = () => {
    return (
        <div className='container'>
            <div className='page'>
                <HomeBanner />
                <HomeReleases />
                <HomeSupport />
            </div>
        </div>
    );
};

export default Home;
