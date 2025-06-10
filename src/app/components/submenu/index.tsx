import style from './styles.module.scss';

const Submenu = () => {
    return (
        <div className={style.container}>
            <button className={style.button}>Visualizar</button>
            <button className={style.button}>Editar</button>
            <button className={style.button}>Remover</button>
        </div>
    );
}

export default Submenu;