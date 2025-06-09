
import styles from './sidebar-mobile.module.scss';

interface ISidebarMobileProps {
    onToggleSidebar: () => void;
}

const SidebarMobile = ({ onToggleSidebar }: ISidebarMobileProps) => {
    return (
        <button className={styles.menuButton} onClick={onToggleSidebar}>
            ☰
        </button>
    );
};

export default SidebarMobile;
