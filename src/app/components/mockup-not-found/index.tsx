import Image from "next/image";
import style from './mockup.module.scss';
import Link from "next/link";

const MockupNotFound = () => {
    return (
        <div className={style.container}>
            <div>
                <Image
                    src={'/error.png'}
                    alt="Página em construção"
                    width={300}
                    height={300}
                />
                <h1 className={style.title}>Página em construção</h1>
                <span className={style.legend}>Retornar para <Link className={style.link} href={'/events'}>Eventos</Link> </span>
            </div>
        </div>
    );
}

export default MockupNotFound;