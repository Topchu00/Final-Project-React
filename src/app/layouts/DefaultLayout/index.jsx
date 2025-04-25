import { DefaultLayoutHeader } from '../../../widgets/DefaultLayout';

import stl from './index.module.scss';

const DefaultLayout = ({ children }) => {
    return (
        <div className={stl.root}>
            <DefaultLayoutHeader />
        </div>
    );
};

export default DefaultLayout;
