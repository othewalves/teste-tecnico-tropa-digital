import Image from 'next/image';
import style from './styles.module.scss';

const Submenu = () => {
    return (
        <div className={style.container}>
            <button className={style.button}>
                <Image width={16} height={16} src={'/Eye.svg'} alt='Visualizar' />
                Visualizar
            </button>
            <button className={style.button}>
                <Image width={16} height={16} src={'/Pencil.svg'} alt='Editar' />
                Editar
            </button>
            <button className={`${style.button} ${style.buttonTrash}`}>
                <Image width={16} height={16} src={'/Trash.svg'} alt='Remover' />
                Remover
            </button>
        </div>
    );
}

export default Submenu;