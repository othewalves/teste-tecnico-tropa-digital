'use client'
import { useContext } from 'react';

import Image from 'next/image';
import Logo from '../../../../public/logo.svg';
import * as styles from './form.module.scss';

import Input from '../input';
import Button from '../button';


import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { loginForm, loginSchema } from './form.validator';

import { UserContext } from '@/app/hooks/UserContext';




const Form = () => {

    const { login } = useContext(UserContext);

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
        login(form);

    }


    return (
        <form className={styles.form} onSubmit={handleSubmit(handleLogin)}>
            <div className={styles.logo}>
                <Image
                    src={Logo}
                    alt='Tropa digital'
                    width={161}
                    height={25}
                />
            </div>
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