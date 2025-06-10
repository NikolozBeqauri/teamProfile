'use client';

import { useForm } from 'react-hook-form';
import styles from './EmailForm.module.scss';
import Image from 'next/image';
import ReusableButton from '../ReusableButton/ReusableButton';
import { useState } from 'react';

const EmailForm = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm();


    const [messageFilled, setMessageFilled] = useState(false);
    console.log(messageFilled);
    

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
                            placeholder="Subject"
                            {...register('subject', {
                                required: 'Subject is required',
                                minLength: {
                                    value: 4,
                                    message: 'Subject must be at least 4 characters',
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
                            placeholder="Email"
                            {...register('email', {
                                required: 'Email is required',
                                pattern: {
                                    value: /.+@.+/,
                                    message: 'Email must contain "@"',
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
                            placeholder="Phone"
                            {...register('phone', {
                                required: 'Phone number is required',
                                pattern: {
                                    value: /^[0-9]{8,14}$/,
                                    message: 'Enter a valid phone number',
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
                            placeholder="Your Message"
                            id={messageFilled ? styles.textareaFilled : ""}
                            {...register('message', {
                                required: 'Message is required',
                                validate: {
                                    minLength: (value) =>
                                        value.length >= 8 || 'Message must be at least 8 characters',
                                    minWords: (value) =>
                                        value.trim().split(/\s+/).length >= 3 ||
                                        'Message must contain at least 3 words',
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
                        <ReusableButton title="Send" type="submit" imgName="blueArrow" />
                    </div>
                </div>
            </div>
        </form>
    );
};

export default EmailForm;
