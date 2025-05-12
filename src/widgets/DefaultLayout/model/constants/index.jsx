import { FaDiscord, FaPatreon, FaTelegramPlane, FaVk, FaYoutube } from 'react-icons/fa';
import { SiBoosty } from 'react-icons/si';
import { mdiAccount, mdiCog, mdiFilmstripBoxMultiple, mdiMagnify } from '@mdi/js';
import Icon from '@mdi/react';

import RoutePath from '../../../../shared/constants/RoutePath';

export const NAV_ITEMS = [
    {
        title: 'Релизы',
        to: RoutePath.CATALOG,
    },
    {
        title: 'Расписание',
        to: '#',
    },
    {
        title: 'Приложения',
        to: '#',
    },
    {
        title: 'Поддержать проект',
        to: '#',
    },
];

export const OPTIONS_ITEMS = [
    {
        icon: <Icon size='18px' path={mdiFilmstripBoxMultiple} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiMagnify} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiCog} />,
        to: '#',
    },
    {
        icon: <Icon size='18px' path={mdiAccount} />,
        to: RoutePath.AUTH.LOGIN(),
    },
];

export const FOOTER_ITEMS = [
    {
        title: 'Главная',
        to: RoutePath.HOME,
    },
    {
        title: 'Релизы',
        to: RoutePath.CATALOG,
    },
    {
        title: 'Расписание',
        to: '#',
    },
    {
        title: 'Приложения',
        to: '#',
    },
    {
        title: 'Поддержать проект',
        to: '#',
    },
    {
        title: 'Франшизы',
        to: '#',
    },
    {
        title: 'Жанры',
        to: '#',
    },
    {
        title: 'Торренты',
        to: '#',
    },
];

export const FOOTER_OPTIONS_ITEMS = [
    {
        title: 'Авторизация',
        to: RoutePath.AUTH.LOGIN(),
    },
    {
        title: 'Регистрация',
        to: RoutePath.AUTH.REGISTRATION(),
    },
    {
        title: 'Настройки',
        to: '#',
    },
    {
        title: 'Восстановить пароль',
        to: RoutePath.AUTH.FORGOT_PASSWORD(),
    },
    {
        title: 'Правила',
        to: '#',
    },
    {
        title: 'Техническая документация',
        to: '#',
    },
    {
        title: 'Документия API v1',
        to: '#',
    },
    {
        title: 'Мониторинг сервисов',
        to: '#',
    },
];

export const FOOTER_ICONS = [
    {
        icon: <FaVk />,
        to: '#',
    },
    {
        icon: <FaTelegramPlane />,
        to: '#',
    },
    {
        icon: <FaDiscord />,
        to: '#',
    },
    {
        icon: <FaYoutube />,
        to: '#',
    },
    {
        icon: <FaPatreon />,
        to: '#',
    },
    {
        icon: <SiBoosty />,
        to: '#',
    },
];

