'use client'
// import Image from 'next/image';
import styles from './sidebar.module.scss';
import Logo from '../../../../public/logo.svg';

import { SidebarItemsMocks } from '../sidebar-item/sidebar-items';
import Image from 'next/image';
// import DashboardIcon from '../icons/DashboardIcon';
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import React from 'react';


const Sidebar = () => {
    const pathname = usePathname();
    return (
        <div className={styles.container}>
            <Image
                src={Logo}
                alt='Tropa Digital'
            />
            <nav>
                <span className={styles.menuTitle}>Menu</span>
                <ul>
                    {SidebarItemsMocks.map((item) => (
                        <li key={item.title}>
                            <Link className={`${styles.link} ${item.path === pathname ? styles.active : styles.inactive}`} href={item.path}>
                                {/* <DashboardIcon color={`${item.path === pathname ? '#FFFFFF' : '#252525'}`} /> */}
                                {React.cloneElement(item.icon, {
                                    color: item.path === pathname ? '#FFFFFF' : '#252525'
                                })}
                                <span>
                                    {item.title}
                                </span>
                            </Link>
                        </li>
                    ))
                    }
                </ul>
            </nav>
        </div >
    );
}

export default Sidebar;