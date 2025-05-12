import EmailVerificationForm from '../../../widgets/Auth/EmailVerifyForm';

import stl from './index.module.scss';

const EmailVerification = () => {
    return (
        <div className='container'>
            <div className={stl.page}>
                <div className={stl.email}>
                    <EmailVerificationForm />
                </div>
            </div>
        </div>
    );
};

export default EmailVerification;
