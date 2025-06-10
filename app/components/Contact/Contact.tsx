import EmailForm from '../EmailForm/EmailForm'
import styles from './Contact.module.scss'
import Image from 'next/image'
const Contact = () => {
  return (
    <div className={styles.wrapper}>
        <div className={styles.texts}>
            <h2>Let's talk</h2>
            <p>We'd love to hear about your project, idea, or challenge. Whether you're ready to start or just exploring, we're here to chat. 📬 Reach out — no pressure, just a friendly conversation.</p>
            <div className={styles.phoneWrapper}>
                <Image
                    src={"/grayPhone.svg"}
                    alt='phone icon'
                    width={17}
                    height={17}
                />
                <p>(+995 577 77 77)</p>
            </div>
        </div>

        <EmailForm/>    
    </div>
  )
}

export default Contact