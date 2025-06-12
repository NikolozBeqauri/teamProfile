'use client';
import { useState } from 'react';
import styles from './ServiceSection.module.scss';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from "next-intl";

const ServiceSection = () => {
  const t = useTranslations('OurService');

  const services = [
    {
      name: t('web'),
      image: '/serviceWeb.png',
      description: t('webDescription'),
    },
    {
      name: t('mobile'),
      image: '/serviceWeb.png',
      description: t('mobileDescription'),
    },
    {
      name: t('ui'),
      image: '/serviceWeb.png',
      description: t('uiDescription'),
    },
  ];

  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];

  return (
    <div className={styles.wrapper} id='services'>
      <div className={styles.serviceNavigation}>
        <h2>{t('title')}</h2>
        <div>
          {services.map((service, index) => (
            <p
              key={index}
              onClick={() => setSelectedIndex(index)}
              className={
                index === selectedIndex ? styles.activeP : styles.defaultP
              }
            >
              {service.name}
            </p>
          ))}
        </div>
      </div>

      <div className={styles.serviceNavigationItem}>
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedService.name + '-img'}
            initial={{ x: 100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 100, opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            <Image
              src={selectedService.image}
              alt={selectedService.name}
              className={styles.image}
              width={600}
              height={400}
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={selectedService.name + '-text'}
            initial={{ opacity: 0 }}
            animate={{opacity: 1 }}
            exit={{opacity: 0 }}
            transition={{ duration: 0.6 }}
          >
            {selectedService.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceSection;
