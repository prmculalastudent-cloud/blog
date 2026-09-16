import Head from 'next/head';
import Layout, { siteTitle } from '../components/layout';
import utilStyles from '../styles/utils.module.css';

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>{siteTitle}</title>
      </Head>

      <section className={utilStyles.headingMd}>
        <p>
          Hello! My name is Phillip Rae Culala. I am a student who enjoys
          playing games, watching movies, listening to music, and learning
          about technology.
        </p>

        <p>
          My favorite music is pop and jazz, and my favorite food is Adobo. In five years, I see myself having a stable career, improving
          my skills, and achieving my goals in life.
        </p>

        <p>
          (This is a sample website - you’ll be building a site like this on{' '}
          <a href="https://nextjs.org/learn">
            our Next.js tutorial
          </a>.)
        </p>
      </section>
    </Layout>
  );
}