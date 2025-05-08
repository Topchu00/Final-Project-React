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
