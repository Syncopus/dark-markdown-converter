"use client";
import styles from './page.module.css'
import dynamic from 'next/dynamic';

const DynamicComponent = dynamic(() => import('./DynamicComponent'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Home() {
  return (
    <main className={styles.main}>
      <DynamicComponent/>
    </main>
  )
}
