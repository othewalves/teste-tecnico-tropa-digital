import Button from '@/app/components/button';
import styles from './events.module.scss';
import Image from 'next/image';
import Input from '@/app/components/input';
import Table from '@/app/components/table/page';


const Events = () => {
    return (
        <div className={styles.container}>
            <p className={styles.label}>Bem vindo de volta, <span>Kaique Steck </span></p>
            <h1 className={styles.title}>Todos eventos</h1>

            <div className={styles.tableContainer}>
                <div className={styles.cardActions}>
                    <Input style={{ width: 140 }} placeholder='Buscar eventos' />
                    <Button style={{ width: 140 }}>
                        <Image src={'/plus-icon.svg'} alt='Buscar' width={15} height={15} /> Inserir novo
                    </Button>
                </div>
                <Table />
            </div>
        </div >
    );
}

export default Events;