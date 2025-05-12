import RegistrationForm from '../../../widgets/Auth/Regis/ui/RegisTrationForm';

import stl from './index.module.scss';

const Registration = () => {
    return (
        <div className='container'>
            <div className={stl.page}>
                <div className={stl.registr}>
                    <RegistrationForm />
                </div>
            </div>
        </div>
    );
};

export default Registration;
