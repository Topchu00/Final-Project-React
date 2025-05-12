import FooterNav from '../FooterNav';
import FooterOptions from '../FooterOptions';
import SocialFooter from '../SocialFooter';

import stl from './index.module.scss';

import { MainLogo } from '@/app/assets/icons';

const DefaultLayoutFooter = () => (
    <footer className={stl.footer}>
        <div className='container'>
            <div className={stl.footer__top}>
                <div className={stl.footer__brand}>
                    <img
                        className={stl.footer__logo}
                        src={MainLogo}
                        width={100}
                        height={100}
                        alt='AniLibria logo'
                    />
                    <div>
                        <h1>AniLibria</h1>
                        <p>Так звучит аниме!</p>
                        <p>Перевод и озвучивание на русский язык аниме-серий и не только</p>
                        <p>Спасибо, что выбираете нас!</p>
                    </div>
                </div>

                <div className={stl.content}>
                    <FooterNav />
                    <FooterOptions />
                </div>
            </div>

            <div className={stl.bottom}>
                <div className={stl.bottom__wrapper}>
                    <div className={stl.bottom__wrapper__text}>
                        <p className={stl.legal}>
                            Весь материал на сайте представлен исключительно для домашнего
                            ознакомительного просмотра. В случаях нарушения авторских прав —
                            обращайтесь на почту:
                            <a href='mailto:copyrights@anilibria.top'>copyrights@anilibria.top</a>
                        </p>
                        <p className={stl.legal}>
                            Для связи с нами по вопросам рекламы и сотрудничества:
                            <a href='mailto:contact@anilibria.top'>contact@anilibria.top</a>
                        </p>
                        <div className={stl.copy}>© 2012—2025 AniLibria</div>
                        <div className={stl.copy__second}>KG • Kyrgyzstan</div>
                    </div>
                    <SocialFooter />
                </div>
            </div>
        </div>
    </footer>
);

export default DefaultLayoutFooter;
