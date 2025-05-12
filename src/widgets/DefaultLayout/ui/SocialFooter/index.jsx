import { FOOTER_ICONS } from '../../model/constants';

import stl from './index.module.scss';

const SocialFooter = () => (
    <div className={stl.block}>
        {FOOTER_ICONS.map((s, i) => (
            <a
                key={i}
                href={s.url}
                className={stl.link}
                target='_blank'
                rel='noopener noreferrer'
                aria-label={s.title}
            >
                {s.icon}
            </a>
        ))}
    </div>
);

export default SocialFooter;
