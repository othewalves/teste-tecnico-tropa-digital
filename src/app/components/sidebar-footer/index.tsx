
import Image from 'next/image';
import styles from './sidebar-footer.module.scss';

const MenuActions = [
    {
        icon: '/user.svg',
        title: 'Alterar os dados'
    },
    {
        icon: '/logout.svg',
        title: 'Sair'
    },
]

const SidebarFooter = () => {
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
                {
                    MenuActions.map((item) => (
                        <button className={styles.button} key={item.title}>
                            <Image
                                src={item.icon}
                                alt={item.title}
                                width={15}
                                height={15}
                            />
                            <span>{item.title}</span>
                        </button>

                    ))
                }
            </div>
        </div>
    );
}

export default SidebarFooter;