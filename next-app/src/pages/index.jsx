import Head from "next/head";
import Image from "next/image";
import ImageGallery from "react-image-gallery";
import styles from "@/styles/Home.module.scss";
import MainLayout from "@/layouts/MainLayout";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Head>
        <title>Next-App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <MainLayout>
        <main className={styles.main}>
          <h1>
            WELCOME TO MY
            <br />
            NEXT JS APP
          </h1>
          <button>
            <Link href="/gallery">GO TO GALLERY</Link>
          </button>
        </main>
      </MainLayout>
    </>
  );
}
