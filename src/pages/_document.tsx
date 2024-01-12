import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Roboto:wght@300;400;500;600;700&display=swap"
        />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/icon?family=Material+Icons"
        />
        <meta property="og:title" content="Merli Mejia Tavarez" />
        <meta
          property="og:description"
          content="Software Engineering, Web Development, Mobile Development and Full-Stack Development Services"
        />
        <meta
          property="og:image"
          content="https://portfolio-fe-rust.vercel.app/images/profile-pic.png"
        />
        <meta property="og:url" content="merli.mejiatavarez.com" />
        <meta property="og:type" content="website" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Merli Mejia Tavarez" />
        <meta
          name="twitter:description"
          content="Description of your website"
        />
        <meta
          name="twitter:image"
          content="Software Engineering, Web Development, Mobile Development and Full-Stack Development Services"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
