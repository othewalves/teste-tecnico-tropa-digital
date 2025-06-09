'use client'
import { SidebarItemsMocks } from './sidebar-items';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

import styles from './nav.module.scss';
import React from 'react';

const Nav = () => {
    const pathname = usePathname();

    return (

        <nav className={styles.nav}>
            <span className={styles.menuTitle}>Menu</span>
            <ul>
                {SidebarItemsMocks.map((item) => (
                    <li key={item.title}>
                        <Link className={`${styles.link} ${item.path === pathname ? styles.active : styles.inactive}`} href={item.path}>
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
    );
}

export default Nav;