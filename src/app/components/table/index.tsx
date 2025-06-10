
'use client';

import Image from 'next/image';
import styles from './table.module.scss';
import { useState, useMemo } from 'react';
import Submenu from '../submenu';

interface Event {
    id: string;
    name: string;
    totalStaff: number;
    status: string;
    date: string;
}

const EVENTS: Event[] = [
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

interface TableProps {
    searchTerm: string;
}

const ITEMS_PER_PAGE = 2;

const Table = ({ searchTerm }: TableProps) => {
    const [currentPage, setCurrentPage] = useState(1);
    const [SettingMenuId, setSettingMenuId] = useState('');


    const filteredEvents = useMemo(() => {
        if (!searchTerm) {
            return EVENTS;
        }
        const lowerCaseSearchTerm = searchTerm.toLowerCase();
        return EVENTS.filter(event =>
            event.name.toLowerCase().includes(lowerCaseSearchTerm) ||
            event.status.toLowerCase().includes(lowerCaseSearchTerm) ||
            event.date.toLowerCase().includes(lowerCaseSearchTerm)
        );
    }, [searchTerm]);

    const TOTAL_PAGES = Math.ceil(filteredEvents.length / ITEMS_PER_PAGE);

    const paginatedData = filteredEvents.slice(
        (currentPage - 1) * ITEMS_PER_PAGE,
        currentPage * ITEMS_PER_PAGE
    );

    const handlePageChange = (page: number) => {
        if (page >= 1 && page <= TOTAL_PAGES) {
            setCurrentPage(page);
        }
    };

    const handleShowSubmenu = (id: string) => {
        if (SettingMenuId === id) return setSettingMenuId('')
        if (SettingMenuId !== id) return setSettingMenuId(id)
    }

    useState(() => {
        setCurrentPage(1);
    }, [searchTerm]);


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
                    {paginatedData.length > 0 ? (
                        paginatedData.map((item) => (
                            <tr key={item.id}>
                                <td>{item.name}</td>
                                <td>{item.totalStaff}</td>
                                <td className={styles.celStatus}><div className={`${styles.status} ${item.status === 'Ativo' ? styles.success : styles.error}`} />{item.status}</td>
                                <td>
                                    <div className={styles.flexRow}>
                                        <span>{item.date}</span>
                                        <button className={styles.button} onClick={() => handleShowSubmenu(item.id)}>
                                            <Image src={'/setting.svg'} alt='Configurações' width={4} height={10} />
                                        </button>
                                        {
                                            SettingMenuId === item.id && <Submenu />
                                        }
                                    </div>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={4} style={{ textAlign: 'center', padding: '20px' }}>Nenhum evento encontrado.</td>
                        </tr>
                    )}
                </tbody>
            </table>
            {TOTAL_PAGES > 0 && (
                <div className={styles.pagination}>
                    <button
                        onClick={() => handlePageChange(currentPage - 1)}
                        disabled={currentPage === 1}
                        className={currentPage !== 1 ? styles.active : styles.disabled}
                    >
                        Anterior
                    </button>

                    {Array.from({ length: TOTAL_PAGES }, (_, i) => i + 1).map((page) => (
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
            )}
        </div >
    );
}

export default Table;