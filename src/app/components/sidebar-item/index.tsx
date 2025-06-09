
import Link from "next/link";
import { ReactNode } from "react";
import styles from './sidebar-item.module.scss';

interface ISidebarItem {
    path: string;
    children: ReactNode;
}

const SidebarItem = ({ path, children }: ISidebarItem) => {
    return (
        <Link href={path} className={styles.link}>
            {children}
        </Link>
    );
}

export default SidebarItem;