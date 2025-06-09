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
            {/* Sidebar fixo (visível no desktop) */}
            <div className={styles.sidebarDesktop}>
                <Sidebar />
            </div>

            {/* Botão que aparece no mobile */}
            <SidebarMobile onToggleSidebar={handleToggleSidebar} />

            {/* Sidebar modal (apenas se aberto no mobile) */}
            {isSidebarOpen && (
                <div className={styles.sidebarMobile}>
                    <Sidebar />
                </div>
            )}

            {/* Overlay para fechar o menu mobile */}
            {isSidebarOpen && <div className={styles.overlay} onClick={() => setIsSidebarOpen(false)} />}

            {children}
        </main >
    );
};