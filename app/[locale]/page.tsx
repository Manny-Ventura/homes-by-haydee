import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Home() {
  const t = useTranslations('home')

  return (
  <>
    <h1>{t('title')}</h1>
    <h2>{t('subtitle')}</h2>
    </>
  );
}
