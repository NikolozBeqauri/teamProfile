import React from 'react'
import styles from "./ReusableButton.module.scss";
import Image from "next/image";
interface Props {
    title: string;
    imgName?: string;
    imgWidth?: number
    propsHeight?: number
}

const ReusableButton = (props: Props) => {
    return (
        <div className={styles.container}>
            <p>{props.title}</p>
            {props.imgName && (
                <Image
                    src={`/${props.imgName}.svg`}
                    alt='asd'
                    width={props.imgWidth ? props.imgWidth : 24}
                    height={props.propsHeight ? props.propsHeight : 24}
                />
            )}
        </div>
    )
}

export default ReusableButton