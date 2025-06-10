import EmailForm from '../EmailForm/EmailForm';
import styles from './Contact.module.scss';
import Image from 'next/image';
import { useTranslations } from 'next-intl';

const Contact = () => {
    const t = useTranslations('Contact');

    return (
        <div className={styles.wrapper} id='contact'>
            <div className={styles.texts}>
                <h2>{t('title')}</h2>
                <p>{t('description')}</p>
                <div className={styles.phoneWrapper}>
                    <Image
                        src={"/grayPhone.svg"}
                        alt='phone icon'
                        width={17}
                        height={17}
                    />
                    <p>{t('phone')}</p>
                </div>
            </div>

            <EmailForm />
        </div>
    );
};

export default Contact;
