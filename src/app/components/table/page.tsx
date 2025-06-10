import Image from 'next/image';
import styles from './table.module.scss';

const EVENTS = [
    {
        id: '123',
        name: 'Clube do Laço Coração Pantaneiro',
        totalStaff: 10,
        status: 'Ativo',
        date: '09 a 11 de Junho'
    },
    {
        id: '234',
        name: 'Clube do Laço Coração Pantaneiro',
        totalStaff: 10,
        status: 'Ativo',
        date: '09 a 11 de Junho'
    },
]
const Table = () => {
    return (
        <table>
            <thead>
                <tr>
                    <td>Nome do evento</td>
                    <td>Total de equipes</td>
                    <td>Status</td>
                    <td>Data</td>
                </tr>
            </thead>
            <tbody>
                {EVENTS.map((item) => (
                    <tr key={item.id}>
                        <td>{item.name}</td>
                        <td>{item.totalStaff}</td>
                        <td className={styles.celStatus}><div className={styles.status} />{item.status}</td>
                        <td>
                            <div className={styles.flexRow}>
                                <span>{item.date}</span>
                                <button>
                                    <Image src={'/setting.svg'} alt='Configurações' width={4} height={10} />
                                </button>
                            </div>
                        </td>
                    </tr>
                ))
                }
            </tbody>
        </table>
    );
}

export default Table;