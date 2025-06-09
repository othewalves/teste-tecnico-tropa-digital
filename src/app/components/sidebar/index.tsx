import Logo from '../../../../public/logo.svg';

import Image from 'next/image';
import styles from './sidebar.module.scss';

import Nav from '../nav';
import SidebarFooter from '../sidebar-footer';


const Sidebar = () => {
    return (
        <div className={styles.container}>
            <Image
                src={Logo}
                alt='Tropa Digital'
            />
            <Nav />
            <SidebarFooter />
        </div >
    );
}

export default Sidebar;