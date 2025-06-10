import { ButtonHTMLAttributes, ReactNode } from "react";
import styles from './button.module.scss';

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode;
    isLoading?: boolean;
    width?: 'small' | 'medium' | 'large';

}
const Button = ({ children, isLoading, width, ...rest }: IButtonProps) => {
    return (
        <button disabled={isLoading} {...rest} className={`${styles.container} ${styles[width]}`} >
            {children}
        </button>
    );
}

export default Button;