import ResetPasswordForm from '../../../../widgets/Auth/Password/ResetPasswordForm';

import stl from './index.module.scss';

export const ResetPassword = () => {
    return (
        <div className='container'>
            <div className={stl.page}>
                <div className={stl.reset}>
                    <ResetPasswordForm />
                </div>
            </div>
        </div>
    );
};
