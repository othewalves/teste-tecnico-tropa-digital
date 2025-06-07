import Button from '../button';
import Input from '../input';
import * as styles from './form.module.scss';
const Form = () => {
    return (
        <form className={styles.form}>
            <div className={styles['form-header']}>
                <h1 className={styles.title}>Bem-vindo de volta</h1>
                <span className={styles.subtitle}>Entre com sua conta para acessar o painel.</span>
            </div>
            <Input
                placeholder='seunome@seuservidor.com'
                label='apt'
                type='email'
            // error='apt'
            />
            <Input
                placeholder='Digite aqui'
                label='apt'
                type='password'
            // error='apt'
            />
            <Button>Enviar</Button>
        </form>
    );
}

export default Form;