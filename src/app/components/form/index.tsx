import * as styles from './form.module.scss';
const Form = () => {
    return (
        <form className={styles.form}>
            <h1 className={styles.title}>Bem-vindo de volta</h1>
            <span className={styles.subtitle}>Entre com sua conta para acessar o painel.</span>
            <input />
        </form>
    );
}

export default Form;