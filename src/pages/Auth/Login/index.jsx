import LoginForm from '../../../widgets/Auth/Login/ui/LoginForm';

import stl from './index.module.scss';

import { MainLogoWhite } from '@/app/assets/icons';

const Login = () => {
    return (
        <div className='container'>
            <div className={stl.page}>
                <div className={stl.wrapper}>
                    <LoginForm />
                </div>
            </div>
        </div>
    );
};

export default Login;
