
import Image from 'next/image';
import styles from './sidebar-footer.module.scss';
import { useContext } from 'react';
import { UserContext } from '@/app/hooks/UserContext';


const SidebarFooter = () => {

    const { logout } = useContext(UserContext);

    return (
        <div>
            <div className={styles.divider} />
            <div className={styles.sidebarFooter}>
                <div className={styles.userContainer}>
                    <Image
                        src={'/user-profile.png'}
                        alt={'Kaique'}
                        width={40}
                        height={40}
                        className={styles.userImage}
                    />
                    <div className={styles.userContent}>
                        <span className={styles.userName}>Kaique Steck</span>
                        <span className={styles.userRole}>Administrador</span>
                    </div>
                </div>
                <button className={styles.button}>
                    <Image
                        src={'/user.svg'}
                        alt={'Alterar os dados'}
                        width={15}
                        height={15}
                    />
                    <span>Alterar os dados</span>
                </button>
                <button className={styles.button} onClick={logout}>
                    <Image
                        src={'/logout.svg'}
                        alt={'Sair'}
                        width={15}
                        height={15}
                    />
                    <span>Sair</span>
                </button>

            </div>
        </div >
    );
}

export default SidebarFooter;