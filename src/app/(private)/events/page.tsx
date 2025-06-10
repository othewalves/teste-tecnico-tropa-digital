'use client'
import Button from '@/app/components/button';
import styles from './events.module.scss';
import Image from 'next/image';
import Input from '@/app/components/input';
import Table from '@/app/components/table';

import { useWindowDimensions } from '@/app/utils/getWindowSize';
import { useState } from 'react';


const Events = () => {
    const windowDimension = useWindowDimensions();
    const [searchEvent, setSearchEvent] = useState('');


    return (
        <div className={styles.container}>
            <p className={styles.label}>Bem vindo de volta, <span>Kaique Steck </span></p>
            <h1 className={styles.title}>Todos eventos</h1>

            <div className={styles.tableContainer}>
                <div className={styles.cardActions}>
                    <Input onChange={(e) => setSearchEvent(e.target.value)} width={'medium'} placeholder='Buscar eventos' icon={<Image src={'./search.svg'} alt='Buscar eventos' width={15} height={15} />} />
                    <Button width={`${windowDimension.width >= 768 ? 'small' : 'medium'}`}>
                        <Image src={'/plus-icon.svg'} alt='Buscar' width={15} height={15} /> Inserir novo
                    </Button>
                </div>
                <Table searchTerm={searchEvent} />
            </div>
        </div >
    );
}

export default Events;