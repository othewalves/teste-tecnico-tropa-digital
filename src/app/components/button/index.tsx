import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isLoading?: boolean;
}
const Button = ({ children, isLoading, ...rest }: IButtonProps) => {
    return (
        <button disabled={isLoading} {...rest} className={styles.container} >
            {children}
        </button>
    );
}

export default Button;