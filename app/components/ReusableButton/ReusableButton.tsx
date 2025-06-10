// ReusableButton.tsx
import React from 'react';
import styles from "./ReusableButton.module.scss";
import Image from "next/image";

interface Props {
    title: string;
    imgName?: string;
    imgWidth?: number;
    propsHeight?: number;
    type?: "button" | "submit" | "reset"; 
}

const ReusableButton = (props: Props) => {
    return (
        <button type={props.type || "button"} className={styles.container}>
            <p>{props.title}</p>
            {props.imgName && (
                <Image
                    src={`/${props.imgName}.svg`}
                    alt='button icon'
                    width={props.imgWidth ?? 24}
                    height={props.propsHeight ?? 24}
                />
            )}
        </button>
    );
};

export default ReusableButton;
