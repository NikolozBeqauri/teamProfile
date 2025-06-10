'use client';

import { useForm } from 'react-hook-form';
import styles from './EmailForm.module.scss';
import Image from 'next/image';
import ReusableButton from '../ReusableButton/ReusableButton';
import { useState } from 'react';
import { useTranslations } from 'next-intl';

const EmailForm = () => {
    const t = useTranslations('EmailForm');
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();

    const [messageFilled, setMessageFilled] = useState(false);

    const onSubmit = (data: any) => {
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className={styles.emailForm}>
            <div className={styles.inputsWrapper}>
                <div className={styles.firstDiv}>
                    {/* Subject Field */}
                    <div>
                        <Image src="/subject.svg" alt="subject icon" width={17} height={17} />
                        <input
                            type="text"
                            placeholder={t('subject')}
                            {...register('subject', {
                                required: t('errors.subjectRequired'),
                                minLength: {
                                    value: 4,
                                    message: t('errors.subjectMin'),
                                },
                            })}
                        />
                    </div>
                    {typeof errors.subject?.message === 'string' && (
                        <p className={styles.error}>{errors.subject.message}</p>
                    )}

                    {/* Email Field */}
                    <div>
                        <Image src="/email.svg" alt="email icon" width={17} height={17} />
                        <input
                            type="email"
                            placeholder={t('email')}
                            {...register('email', {
                                required: t('errors.emailRequired'),
                                pattern: {
                                    value: /.+@.+/,
                                    message: t('errors.emailInvalid'),
                                },
                            })}
                        />
                    </div>
                    {typeof errors.email?.message === 'string' && (
                        <p className={styles.error}>{errors.email.message}</p>
                    )}

                    {/* Phone Field */}
                    <div>
                        <Image src="/phone.svg" alt="phone icon" width={17} height={17} />
                        <input
                            type="text"
                            placeholder={t('phone')}
                            {...register('phone', {
                                required: t('errors.phoneRequired'),
                                pattern: {
                                    value: /^[0-9]{8,14}$/,
                                    message: t('errors.phoneInvalid'),
                                },
                            })}
                        />
                    </div>
                    {typeof errors.phone?.message === 'string' && (
                        <p className={styles.error}>{errors.phone.message}</p>
                    )}
                </div>

                {/* Message Field */}
                <div className={styles.secondDiv}>
                    <div>
                        <textarea
                            placeholder={t('message')}
                            id={messageFilled ? styles.textareaFilled : ''}
                            {...register('message', {
                                required: t('errors.messageRequired'),
                                validate: {
                                    minLength: (value) =>
                                        value.length >= 8 || t('errors.messageMin'),
                                    minWords: (value) =>
                                        value.trim().split(/\s+/).length >= 3 ||
                                        t('errors.messageWords'),
                                },
                                onChange: (e) => {
                                    const value = e.target.value;
                                    setMessageFilled(value.trim().length > 0);
                                },
                            })}
                        />
                    </div>
                    {typeof errors.message?.message === 'string' && (
                        <p className={styles.error}>{errors.message.message}</p>
                    )}

                    <div className={styles.buttonWrapper}>
                        <ReusableButton title={t('send')} type="submit" imgName="blueArrow" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EmailForm;
