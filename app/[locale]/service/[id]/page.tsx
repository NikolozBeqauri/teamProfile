import styles from "./page.module.scss";
import Image from "next/image";
import NavigationRender from '@/app/components/NavigationRender/NavigationRender';
import { getTranslations } from 'next-intl/server';
import { notFound } from 'next/navigation';

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const t = await getTranslations('FullServiceInfo');

    let service: {
        title: string;
        text: string[];
        list: string[];
    };

    try {
        service = {
            title: t(`${id}.title`),
            text: t.raw(`${id}.text`) as string[],
            list: t.raw(`${id}.list`) as string[],
        };
    } catch (e) {
        console.log(e);
        notFound();
    }

    return (
        <>
            <NavigationRender notIndexPage />
            <section className={styles.container}>
                <div className={styles.header}>
                    <h1>{t("title")}</h1>
                </div>

                <div className={styles.content}>
                    <div className={styles.body}>
                        <h2>{service.title}</h2>
                        <div className={styles.contentParagraphs}>
                            {service.text.map((paragraph, idx) => (
                                <p key={idx}>{paragraph}</p>
                            ))}
                        </div>
                    </div>

                    {service.list.length > 0 && (
                        <div className={styles.listContainer}>
                            <h3>{t("secondaty")}</h3>
                            <ul className={styles.listItemUl}>
                                {service.list.map((item, index) => (
                                    <div key={index} className={styles.listItem}>
                                        <Image src="/serviceIcon.svg" alt="icon" width={24} height={24} />
                                        <li>{item}</li>
                                    </div>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>

                <div className={styles.calculatorImage}>
                    <Image
                        src={`/service${id}.jpg`}
                        alt="calculator"
                        width={1440}
                        height={624}
                    />
                </div>
            </section>
        </>
    );
}
