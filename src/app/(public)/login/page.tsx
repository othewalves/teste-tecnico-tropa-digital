import Image from 'next/image';
import * as styles from './login.module.scss';
import Hero from '../../../../public/hero.svg';
import Form from '@/app/components/form';

const Login = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Form />
                <Image
                    src={Hero}
                    alt='Tropa digital'
                    className={styles.heroImg}

                />
            </div>
        </section>
    );
}

export default Login;