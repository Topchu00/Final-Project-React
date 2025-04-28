import React from 'react';

import stl from './index.module.scss';

import { MainLogo } from '@/app/assets/icons';

const DefaultLayoutHeader = () => {
    return (
        <header className={stl.header}>
            <div className='container'>
                <img
                    className={stl.header__logo}
                    src={MainLogo}
                    width='40px'
                    height='40px'
                    alt='Mainlogo'
                />
            </div>
        </header>
    );
};

export default DefaultLayoutHeader;
