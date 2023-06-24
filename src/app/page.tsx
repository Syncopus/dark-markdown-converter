"use client";
import styles from './page.module.css'
import dynamic from 'next/dynamic';
import Script from 'next/script'

const DynamicComponent = dynamic(() => import('./DynamicComponent'), {
  ssr: false, // Disable server-side rendering for this component
});

export default function Home() {
  return (
    <main className={styles.main}>
      <Script src="https://cdn.freecodecamp.org/testable-projects-fcc/v1/bundle.js"></Script>
      <DynamicComponent/>
    </main>
  )
}
