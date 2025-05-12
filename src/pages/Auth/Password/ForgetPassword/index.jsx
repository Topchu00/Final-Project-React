import { ForgotPasswordForm } from '../../../../widgets/Auth/Password/ForgetPassWordForm';

import stl from './index.module.scss';

export const ForgotPassword = () => {
    return (
        <div className='container'>
            <div className={stl.page}>
                <div className={stl.forget}>
                    <ForgotPasswordForm />
                </div>
            </div>
        </div>
    );
};
