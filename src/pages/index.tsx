import styles from '@/styles/Home.module.css';
import { Inter } from '@next/font/google';
import Head from 'next/head';
import Image from 'next/image';
import { useRef, useState } from 'react';

const inter = Inter({ subsets: ['latin'] });

export default function Home() {
  const file = useRef();
  const [image, setImage] = useState('');
  const [name, setName] = useState('');

  const handleImageSelection = ({
    target: { files },
  }: {
    target: { files: Array<Blob> };
  }) => {
    console.log({ image: files[0] });

    console.log({ image: URL.createObjectURL(files[0]) });
    setImage(URL.createObjectURL(files[0]));
  };

  const generateSurvival = () => {
    console.log('Generating Survival');
  };
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name='description' content='Generated by create next app' />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <main className={styles.main}>
        <div className={styles.description}>
          <p>
            Get started by&nbsp;
            <code className={styles.code}>uploading your picture</code>
          </p>
        </div>

        <div className={styles.center}>
          <div>
            <input
              type='file'
              className={styles.file}
              ref={file}
              name='image'
              onChange={handleImageSelection}
            />
            <input
              type='text'
              className={styles.name}
              name='name'
              placeholder='Enter your name'
              onChange={(event) => setName(event.target.value)}
            />

            <Image
              className={styles.upload}
              onClick={() => file.current.click()}
              src={image ? image : '/next.svg'}
              alt='Next.js Logo'
              width={300}
              height={300}
              priority
            />
            <p>{name}</p>
          </div>
        </div>
        <div className={styles.generate}>
          <button onClick={generateSurvival}>Generate</button>
        </div>

        <div className={styles.grid}>
          <a
            href='whatsapp://send?text=The text to share!'
            data-action='share/whatsapp/share'
            className={styles.card}
          >
            <h2 className={inter.className}>
              Share <span>-&gt;</span>
            </h2>
            <p className={inter.className}>
              share to your friends who also did survive
            </p>
          </a>
        </div>
      </main>
    </>
  );
}
