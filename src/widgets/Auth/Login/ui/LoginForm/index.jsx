import { Controller, useForm } from 'react-hook-form';
import { Button, TextField } from '@mui/material';

import { INITIAL_VALUES } from '../../model/constants';

import stl from './index.module.scss';

export const LoginForm = () => {
    const { control, handleSubmit } = useForm({
        defaultValues: INITIAL_VALUES,
    });

    const onSubmit = (data) => {
        console.log({ data });
    };

    return (
        <form className={stl.form} onSubmit={handleSubmit(onSubmit)}>
            <Controller
                control={control}
                name='login'
                render={({ field }) => <TextField {...field} />}
            />
            <Controller
                control={control}
                name='password'
                render={({ field }) => <TextField {...field} />}
            />
            <Button variant={'contained'} type={'submit'}>
                Авторизация
            </Button>
        </form>
    );
};
