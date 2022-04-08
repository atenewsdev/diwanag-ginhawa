import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
        <link href="https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,100;0,200;0,300;0,400;0,500;1,100;1,200;1,300;1,400;1,500&display=swap" rel="stylesheet" />
        <link rel="preload" href="/art_bg.png" as="image" type="image/png" />
        <link rel="preload" href="/art-gallery.png" as="image" type="image/png" />
        <link rel="preload" href="/artist_bg.png" as="image" type="image/png" />
        <link rel="preload" href="/landing_bg.png" as="image" type="image/png" />
        <link rel="preload" href="/painter.png" as="image" type="image/png" />
        <link rel="preload" href="/logo.png" as="image" type="image/png" />

        <link rel="preload" href="/art/canisius_hall_1998.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/cleaners.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/gimik_sa_hardin.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/free_time.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/march_24_2000.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/ngunit_nang_isang_araw_ay_tumunog_ang_beeper_ko.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/of_dust_and_creation.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/old_gymnasium_of_addu.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/the_cost_of_choice.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/the_pursuit_of_happiness.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/the_scenery_of_equanimity.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/waiting.jpg" as="image" type="image/jpeg" />
        <link rel="preload" href="/art/youre_the_inspiration.jpg" as="image" type="image/jpeg" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}