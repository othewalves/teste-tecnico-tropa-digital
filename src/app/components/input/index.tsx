'use client'
import { InputHTMLAttributes, useState } from "react";
import styles from './input.module.scss';
import EyeOpen from '../../../../public/eye-on.svg'
import EyeOff from '../../../../public/eye-off.svg'
import Image from "next/image";
// import clsx from "clsx";
import { ReactNode } from 'react';

interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
    label?: string;
    error?: string;
    width?: 'small' | 'medium' | 'large';
    icon?: ReactNode
}

const Input = ({
    label,
    error,
    width,
    icon,
    ...rest
}: IInputProps) => {

    const [showPassword, setShowPassword] = useState(false);

    const tooglePassword = () => {
        setShowPassword((prev) => !prev);
    }

    return (
        <div className={`${styles.container} ${width ? styles[width] : ''}`}>
            {
                label &&
                <label className={styles.label}>{label}</label>
            }
            <div className={styles.inputContainer}>
                {icon && icon}
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