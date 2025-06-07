'use client'
import Button from '../button';
import Input from '../input';
import * as styles from './form.module.scss';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginForm, loginSchema } from './form.validator';


const Form = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm<loginForm>({
        resolver: zodResolver(loginSchema),
        defaultValues: {
            email: '',
            password: '',
        }
    });

    const handleLogin = (form: loginForm) => {
        alert('LOGOU', form.email)
    }


    return (
        <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
            <div className={styles.formHeader}>
                <h1 className={styles.title}>Bem-vindo de volta</h1>
                <span className={styles.subtitle}>Entre com sua conta para acessar o painel.</span>
            </div>
            <div className={styles.formContent}>
                <Input
                    placeholder='seunome@seuservidor.com'
                    label='E-mail'
                    type='email'
                    error={errors.email?.message}
                    {...register('email')}
                />
                <Input
                    placeholder='Digite aqui'
                    label='Senha'
                    type='password'
                    error={errors.password?.message}
                    {...register('password')}
                />
                <Button type='submit' >Enviar</Button>
            </div>
        </form>
    );
}

export default Form;