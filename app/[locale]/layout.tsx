import { NextIntlClientProvider, hasLocale } from 'next-intl';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import "./globals.scss";
import { Noto_Sans_Georgian } from 'next/font/google';
import type { Metadata } from 'next';

const notoSansGeorgian = Noto_Sans_Georgian({
  subsets: ['georgian'],
  weight: ['400', '500', '600', '700', '800', '900'],
  display: 'swap',
});

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;

  const descriptions: { [key: string]: string } = {
    en: 'Explore digital transformation with GITA-certified experts. We offer web and mobile development, UI/UX design, and comprehensive IT consulting tailored to your needs.',
    ka: 'აღმოაჩინე ციფრული ტრანსფორმაცია GITA-ს სერტიფიცირებულ სპეციალისტებთან ერთად. ვთავაზობთ ვებ და მობილურ აპლიკაციებს, UI/UX დიზაინს და IT კონსულტაციას შენზე მორგებული გზით.'
  };

  const titles: { [key: string]: string } = {
    en: 'Synaptica',
    ka: 'Synaptica'
  };

  const keywords: { [key: string]: string[] } = {
    en: [
      'Web Development', 'Mobile App Development', 'UI/UX Design', 'Software Company', 'Digital Solutions', 'Software',
      'React', 'Next.js', 'Mobile Application', 'Website', 'Development Agency', 'Synaptica',
      'Frontend', 'Backend', 'Tech Company Georgia', 'Digital Services',
      'Startup Support', 'Mobile Design', 'Web Design', 'Website Creation', 'App Creation',
      'Affordable Website Creation', 'Affordable App Development', 'Website Development', 'Responsive Website',
      'Personal Website', 'Portfolio Creation', 'Portfolio', 'Business Website', 'React Developer',
      'Next.js Developer', 'Frontend Developer'
    ],
    ka: [
      'ვებ დეველოპმენტი', 'მობილური აპლიკაციების დეველოპმენტი', 'UI/UX დიზაინი', 'სოფტვეერის კომპანია',
      'ციფრული გადაწყვეტილებები', 'პროგრამული უზრუნველყოფა',
      'React', 'Next.js', 'მობილური აპლიკაცია', 'ვებსაიტი', 'დეველოპერული სააგენტო', 'სინაფტიკა', 'სინაპტიკა',
      'Synaptica', 'ფრონტენდი', 'ბექენდი', 'ტექნოლოგიური კომპანია საქართველო', 'დიჯიტალური სერვისები',
      'სტარტაპ მხარდაჭერა', 'მობილური დიზაინი', 'ვებ დიზაინი', 'საიტის აწყობა', 'აპლიკაციის აწყობა',
      'საიტის აწყობა იაფად', 'აპლიკაციის აწყობა იაფად', 'საიტის დამზადება', 'რესპონსიული ვებსაიტი',
      'პერსონალური ვებსაიტი', 'პორტფოლიოს აწყობა', 'პორთფოლიო', 'ბიზნეს საიტი', 'React დეველოპერი',
      'Next.js დეველოპერი', 'ფრონტენდ დეველოპერი'
    ]
  };

  return {
    title: titles[locale] || titles.ka,
    description: descriptions[locale] || descriptions.ka,
    keywords: keywords[locale] || keywords.ka,
    icons: {
      icon: '/onlyLogo.svg',
    },
    openGraph: {
      title: titles[locale],
      description: descriptions[locale],
      url: 'https://synaptica.online/en',
      siteName: 'Synaptica',
      locale,
      type: 'website',
    },
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  return (
    <html lang={locale}>
      <body className={notoSansGeorgian.className}>
        <NextIntlClientProvider>{children}</NextIntlClientProvider>
      </body>
    </html>
  );
}
