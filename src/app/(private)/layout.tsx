'use client'
import { useState } from "react";
import Sidebar from "../components/sidebar";

import styles from './styles.module.scss';
import SidebarMobile from "../components/sidebar-mobile";

export default function PrivateLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);
    const handleToggleSidebar = () => {
        setIsSidebarOpen((prev) => !prev);
    };

    return (
        <main className={styles.container}>
            <div className={styles.sidebarDesktop}>
                <Sidebar />
            </div>

            <SidebarMobile onToggleSidebar={handleToggleSidebar} />

            {isSidebarOpen && (
                <div className={styles.sidebarMobile}>
                    <Sidebar />
                </div>
            )}

            {isSidebarOpen && <div className={styles.overlay} onClick={() => setIsSidebarOpen(false)} />}

            {children}
        </main >
    );
};