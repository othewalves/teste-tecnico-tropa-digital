'use client';

import Image from 'next/image';
import styles from './table.module.scss';
import { useState } from 'react';

const EVENTS = [
    {
        id: '1',
        name: 'Clube do Laço Coração Pantaneiro',
        totalStaff: 10,
        status: 'Ativo',
        date: '09 a 11 de Junho'
    },
    {
        id: '2',
        name: 'Evento B',
        totalStaff: 8,
        status: 'Inativo',
        date: '12 a 14 de Julho'
    },
    {
        id: '3',
        name: 'Evento C',
        totalStaff: 6,
        status: 'Ativo',
        date: '20 a 22 de Agosto'
    },
    {
        id: '4',
        name: 'Evento D',
        totalStaff: 5,
        status: 'Ativo',
        date: '10 a 12 de Setembro'
    },
    {
        id: '5',
        name: 'Evento E',
        totalStaff: 12,
        status: 'Inativo',
        date: '05 a 07 de Outubro'
    },
    {
        id: '6',
        name: 'Evento F',
        totalStaff: 7,
        status: 'Ativo',
        date: '15 a 17 de Novembro'
    },
];

const ITEMS_PER_PAGE = 2;
const TOTAL_PAGES = Math.ceil(EVENTS.length / ITEMS_PER_PAGE);

const Table = () => {

    const [currentPage, setCurrentPage] = useState(1);

    const paginatedData = EVENTS.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= TOTAL_PAGES) {
            setCurrentPage(page);
        }
    };

    return (
        <div className={styles.tableWrapper}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <td>Nome do evento</td>
                        <td>Total de equipes</td>
                        <td>Status</td>
                        <td>Data</td>
                    </tr>
                </thead>
                <tbody>
                    {paginatedData.map((item) => (
                        <tr key={item.id}>
                            <td>{item.name}</td>
                            <td>{item.totalStaff}</td>
                            <td className={styles.celStatus}><div className={styles.status} />{item.status}</td>
                            <td>
                                <div className={styles.flexRow}>
                                    <span>{item.date}</span>
                                    <button className={styles.button}>
                                        <Image src={'/setting.svg'} alt='Configurações' width={4} height={10} />
                                    </button>
                                </div>
                            </td>
                        </tr>
                    ))
                    }
                </tbody>
            </table>
            <div className={styles.pagination}>
                <button
                    onClick={() => handlePageChange(currentPage - 1)}
                    disabled={currentPage === 1}
                    className={currentPage !== 1 ? styles.active : styles.disabled}
                >
                    Anterior
                </button>

                {[1, 2, 3].map((page) => (
                    <button
                        key={page}
                        onClick={() => handlePageChange(page)}
                        className={currentPage === page ? styles.activePage : ''}
                    >
                        {page}
                    </button>
                ))}

                <button
                    onClick={() => handlePageChange(currentPage + 1)}
                    disabled={currentPage === TOTAL_PAGES}
                    className={currentPage !== TOTAL_PAGES ? styles.active : styles.disabled}
                >
                    Próxima
                </button>
            </div>
        </div >
    );
}

export default Table;