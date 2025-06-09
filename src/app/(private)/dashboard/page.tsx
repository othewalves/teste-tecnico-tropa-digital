import Sidebar from "@/app/components/sidebar";
import styles from './dashboard.module.scss';

const Dashboard = () => {
    return (
        <div className={styles.container}>
            <Sidebar />
            Dashboard
        </div>
    );
}

export default Dashboard;