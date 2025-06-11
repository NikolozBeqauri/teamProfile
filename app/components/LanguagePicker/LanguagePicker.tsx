'use client';
import Image from "next/image";
import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import styles from "./LanguagePicker.module.scss";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  setActive?: React.Dispatch<React.SetStateAction<boolean>>;
  setPickerOpen?: React.Dispatch<React.SetStateAction<boolean>>;
};

const LanguagePicker = ({ setActive, setPickerOpen }: Props) => {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const [activePicker, setActivePicker] = useState(false);
  const pickerRef = useRef<HTMLDivElement>(null);

  const localeLabels: Record<string, string> = {
    ka: 'KA',
    en: 'ENG',
  };

  const locales = ['ka', 'en'];

  const changeLanguage = (newLocale: string) => {
    const segments = pathname.split('/');
    segments[1] = newLocale;
    const newPath = segments.join('/');
    router.push(newPath);
    setActivePicker(false);
    setPickerOpen?.(false);
  };

  const togglePicker = () => {
    const next = !activePicker;
    setActivePicker(next);
    setPickerOpen?.(next);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
        setActivePicker(false);
        setPickerOpen?.(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className={styles.wrapper} ref={pickerRef}>
      <div className={styles.activeLanguage} onClick={togglePicker}>
        <Image
          src={`/${locale}.svg`}
          alt={`${locale} flag`}
          className={styles.activeFlag}
          width={20}
          height={14}
        />
        <p>{localeLabels[locale] || locale.toUpperCase()}</p>
        <Image
          src={`/downArrow.svg`}
          alt="down arrow"
          className={styles.downArrow}
          width={34}
          height={16}
        />
      </div>

      <AnimatePresence>
        {activePicker && (
          <motion.div
            className={styles.modalContainer}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
          >
            {locales
              .filter(l => l !== locale)
              .map((lang, index, arr) => (
                <div
                  key={lang}
                  className={
                    index !== arr.length - 1
                      ? styles.languageBottomBorder
                      : undefined
                  }
                  onClick={() => {
                    changeLanguage(lang);
                    setActive?.(false);
                  }}
                >
                  <Image
                    src={`/${lang}.svg`}
                    alt={`${lang} flag`}
                    width={20}
                    height={14}
                  />
                  <p>{localeLabels[lang]}</p>
                </div>
              ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default LanguagePicker;
