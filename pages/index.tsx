import Head from 'next/head';
import Image from 'next/image';
import { NextRouter, useRouter } from 'next/router';

import styles from '../styles/Login.module.scss';
import LoginBg from '../public/assets/loginBg.jpg';
import { ROUTES } from '../config/route';

export default function Home(): React.ReactElement {
  const router: NextRouter = useRouter();

  const onSignIn = () => {
    router.push(ROUTES.BROWSE)
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Peteflix</title>
        <meta name='description' content='Made by PeterGriffin who made Netflix Slide.js' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main className={styles.main}>
        <Image src={LoginBg} alt='background image' placeholder='blur' layout='fill' className={styles.main__bgImage} />
        <div className={styles.main__card}>
          <h1>
            Nextflix
          </h1>
          <p>A Made by PeterGriffin who made Netflix Slides</p>
          <div className={styles.button} onClick={onSignIn}>Sign in</div>
        </div>
      </main>
    </div>
  );
}
