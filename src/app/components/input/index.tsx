'use client'
import { InputHTMLAttributes, useState } from "react";
import styles from './input.module.scss';
import EyeOpen from '../../../../public/eye-on.svg'
import EyeOff from '../../../../public/eye-off.svg'
import Image from "next/image";

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
}

const Input = ({
    label,
    error,
    ...rest
}: IInputProps) => {

    const [showPassword, setShowPassword] = useState(false);

    const tooglePassword = () => {
        setShowPassword((prev) => !prev);
    }

    return (
        <div className={styles.container}>
            <label className={styles.label}>{label}</label>
            <div className={styles.inputContainer}>
                <input
                    {...rest}
                    className={styles.input}
                    type={rest.type === 'password' && showPassword ? 'text' : rest.type}
                />
                {rest.type === 'password' &&
                    <button
                        className={styles.iconWrapper}
                        onClick={tooglePassword}
                        type="button"
                    >
                        <Image
                            src={showPassword ? EyeOff : EyeOpen}
                            alt="Ver senha"
                        />
                    </button>
                }
            </div>
            {error && <span className={styles.error}>{error}</span>}
        </div>
    );
}

export default Input;