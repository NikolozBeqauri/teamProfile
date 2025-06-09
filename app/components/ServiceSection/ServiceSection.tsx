'use client';
import { useState } from 'react';
import styles from './ServiceSection.module.scss';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

const services = [
  {
    name: 'Web development',
    image: '/serviceWeb.png',
    description:
      'Our team consists of highly qualified specialists with international experience in the field of Web development, mobile development, Product management and design. We provide premium service at affordable prices and are always focused on the success of our clients.',
  },
  {
    name: 'Mobile development',
    image: '/serviceWeb.png',
    description:
      'We build high-performance mobile applications for iOS and Android using native and cross-platform technologies to suit your business needs.',
  },
  {
    name: 'UX/UI design',
    image: '/serviceWeb.png',
    description:
      'Our designers create user-centered interfaces that are both visually appealing and highly functional, focusing on seamless user experiences.',
  },
];

const ServiceSection = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);
  const selectedService = services[selectedIndex];

  return (
    <div className={styles.wrapper}>
      <div className={styles.serviceNavigation}>
        <h2>Our services</h2>
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
            transition={{ duration: .6 }}
          >
            <Image
              src={selectedService.image}
              alt={selectedService.name}
              width={600}
              height={400}
            />
          </motion.div>
        </AnimatePresence>

        <AnimatePresence mode="wait">
          <motion.p
            key={selectedService.name + '-text'}
            initial={{ x: -100, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: -100, opacity: 0 }}
            transition={{ duration: .6 }}
          >
            {selectedService.description}
          </motion.p>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default ServiceSection;
