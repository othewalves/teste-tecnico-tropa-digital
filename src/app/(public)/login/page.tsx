import Image from 'next/image';
import * as styles from './login.module.scss';
import Logo from '../../../../public/logo.svg';
import Form from '@/app/components/form';

const Login = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <Image
                    src={Logo}
                    alt='Tropa digital'
                    width={161}
                    height={25}
                />
                <Form />
            </div>
        </section>
    );
}

export default Login;