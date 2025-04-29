import React from 'react';

import NavBar from '../NavBar';
import Options from '../Options';

import stl from './index.module.scss';

import { MainLogo } from '@/app/assets/icons';

const DefaultLayoutHeader = () => {
    return (
        <header className={stl.header}>
            <div className='container'>
                <div className={stl.header__wrapper}>
                    <div className={stl.header__nav}>
                        <img
                            className={stl.header__logo}
                            src={MainLogo}
                            width='40px'
                            height='40px'
                            alt='Mainlogo'
                        />

                        <NavBar />
                    </div>
                    <Options />
                </div>
            </div>
        </header>
    );
};

export default DefaultLayoutHeader;
